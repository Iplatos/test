import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useMutation } from '@apollo/client'
import { LOGIN_MUTATION } from '@/apollo/authQueries'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useRouter } from 'next/router'
import { AuthState, useAuthStore } from '../store/store'
import { useEffect } from 'react'
import { getAccessToken, setAccessToken } from '@/helpers/helpers'

export function LoginForm() {
  const [loginMutation, { loading: loginLoading, error: loginError }] = useMutation(LOGIN_MUTATION)
  const { setAuth } = useAuthStore((state: AuthState) => state)

  const router = useRouter()
  const signInSchema = z.object({
    email: z.string().email('Invalid email address').min(1, 'Email is required'),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' })
      .max(20, { message: 'Password must be less than 20 characters long' }),
  })

  type FormValuesType = z.infer<typeof signInSchema>

  useEffect(() => {
    if (!!getAccessToken()) {
      router.push('/my-info')
    }
  }, [])

  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm<FormValuesType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(signInSchema),
  })

  const onSubmit = async (data: FormValuesType) => {
    try {
      const res = await loginMutation({ variables: { email: data.email, password: data.password } })
      setAuth(res.data.login.access_token, res.data.login.refresh_token)
      setAccessToken(res.data.login.access_token)
      router.push('/my-info')
    } catch (error) {
      console.error('Login Failed:', error)
    }
  }

  return (
    <Card className="mx-auto max-w-sm mt-[150px]">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register('email')}
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input {...register('password')} id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full" disabled={!isValid}>
              {loginLoading ? 'Logging in...' : 'Login'}
            </Button>
            {loginError && (
              <p className="text-red-500 text-sm">Login failed: {loginError.message}</p>
            )}
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
