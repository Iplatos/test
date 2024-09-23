import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { jwtDecode } from 'jwt-decode'
import { gql } from '@apollo/client'
import { getAccessToken } from '@/pages/my-info'
import { getRefreshToken } from '@/helpers/helpers'

function setTokens(accessToken: string, refreshToken: string) {
  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('refreshToken', refreshToken)
}

async function refreshAccessToken() {
  const refreshToken = getRefreshToken()

  const refreshTokenMutation = gql`
    mutation refreshToken($refreshToken: String!) {
      refreshToken(refreshToken: $refreshToken) {
        access_token
        refresh_token
      }
    }
  `

  const response = await client.mutate({
    mutation: refreshTokenMutation,
    variables: { refreshToken },
  })

  const newAccessToken = response?.data?.refreshToken?.access_token
  const newRefreshToken = response?.data?.refreshToken?.refresh_token

  setTokens(newAccessToken, newRefreshToken)

  return newAccessToken
}

async function checkTokenAndRefresh() {
  const accessToken = getAccessToken()

  if (accessToken) {
    const decoded: any = jwtDecode(accessToken)

    if (decoded.exp * 1000 < Date.now()) {
      return await refreshAccessToken()
    }
  }

  return accessToken
}

const authLink = setContext(async (_, { headers }) => {
  const token = await checkTokenAndRefresh()

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
})

const link = ApolloLink.from([authLink, httpLink])

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

export default client
