export function getAccessToken() {
  return localStorage.getItem('accessToken') || ''
}
export function setAccessToken(token: string) {
  localStorage.setItem('accessToken', token)
}

export function getRefreshToken() {
  return localStorage.getItem('refreshToken') || ''
}

export function setRefreshToken(token: string) {
  localStorage.setItem('refreshToken', token)
}
