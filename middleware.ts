import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Функция для получения токена из cookies
function getAuthToken(request: NextRequest): string | null {
  const token = request.cookies.get('accessToken') // Получаем токен
  return token ? token.value : null // Возвращаем значение токена
}

export function middleware(request: NextRequest) {
  const token = getAuthToken(request)
  const { pathname } = request.nextUrl

  // Если пользователь авторизован и находится на странице входа, перенаправляем его на главную
  if (pathname === '/signIn' && token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (pathname !== '/signIn' && pathname !== '/public-page' && !token) {
    return NextResponse.redirect(new URL('/signIn', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/signIn'],
}
