import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function getAuthToken(request: NextRequest): string | null {
  const token = request.cookies.get('accessToken')
  return token ? token.value : null
}

export function middleware(request: NextRequest) {
  const token = getAuthToken(request)
  const { pathname } = request.nextUrl

  if (pathname === '/signIn' && token) {
    return NextResponse.redirect(new URL('/my-info', request.url))
  }

  if (pathname !== '/signIn' && pathname !== '/public-page' && !token) {
    return NextResponse.redirect(new URL('/signIn', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/signIn'],
}
