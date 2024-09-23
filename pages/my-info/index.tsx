import { Header } from '@/components/header/header'
import { NavBar } from '@/components/navbar/navbar'
import { SideBar } from '@/components/sideBar/sideBar'

import { useRouter } from 'next/router'
import { useEffect } from 'react'
export function getAccessToken() {
  return localStorage.getItem('accessToken') || ''
}
const MyInfo = () => {
  const router = useRouter()
  useEffect(() => {
    const token = getAccessToken()

    if (!token) {
      router.push('/signIn')
    }
  }, [router])

  return (
    <div className="h-[100%] w-full bg-[#F0F3F8] flex flex-col">
      <Header />
      <NavBar />
      <SideBar />
    </div>
  )
}
export default MyInfo
