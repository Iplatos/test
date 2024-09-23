import { TabsDemo } from '../tabs/tabs'
import { Input } from '../ui/input'
import Image from 'next/image'
import searchSVG from '../../public/search.svg'
import bellSVG from '../../public/bell.svg'
import settingsSVG from '../../public/settings.svg'
import questionSVG from '../../public/question.svg'
import burgerSVG from '../../public/burger.svg'
import exit from '../../public/exit.svg'
import { Avatar } from '../avatar'
import { useQuery } from '@apollo/client'
import { MY_PROFILE_QUERY } from '@/apollo/authQueries'
import { useRouter } from 'next/router'
import { AuthState, useAuthStore } from '@/store/store'

const officeIcons = [
  { src: settingsSVG, alt: 'settings' },
  { src: questionSVG, alt: 'question' },
  { src: bellSVG, alt: 'bell' },
]

export const Header = () => {
  const router = useRouter()
  const { data: profileData } = useQuery(MY_PROFILE_QUERY)
  const clearAuth = useAuthStore((state: AuthState) => state.clearAuth)
  const handleLogout = () => {
    clearAuth()
    localStorage.clear()
    router.push('/signIn')
  }

  return (
    <header className="w-full pr-10 h-[50px] sm:h-[86px] flex flex-col justify-between p-8 bg-white">
      <div className="flex items-center justify-between">
        <nav className="flex items-center"></nav>
      </div>
      <div className="flex justify-between items-center h-full gap-5 lg:gap-0">
        <h1 className="text-xl font-bold">HarmonyHR</h1>

        <div className="mt-12 hidden xl:block">
          <TabsDemo
            bgColor=" bg-white"
            defaultValue="my info"
            bgColorActive="data-[state=active]:bg-[#DAE6F2]"
            tabList={['Home', 'My Info', 'People', 'Hiring', 'Reports', 'Files', 'Settings']}
          />
        </div>

        <div className="relative max-w-[400px] flex justify-center w-[50%]">
          <Input placeholder="Search" className="pl-10 pr-5 h-[48px] w-full" />
          <div className="absolute inset-y-0 left-3 flex items-center">
            <Image src={searchSVG} alt="Search" width={20} height={20} />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between w-[86px] h-[86px] lg:hidden gap-2">
            <Image
              src={burgerSVG}
              width={24}
              height={24}
              alt={'burger'}
              className="flex-shrink-0"
            />
            <Avatar src={profileData?.myProfile?.avatar} alt="avatar" width={38} height={38} />
            <div className="relative group flex-shrink-0">
              <Image
                src={exit}
                width={24}
                height={24}
                alt="exit"
                className="cursor-pointer"
                onClick={handleLogout}
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center w-auto h-[38px] gap-4">
          {officeIcons.map((icon) => (
            <Image key={icon.alt} src={icon.src} width={24} height={24} alt={icon.alt} />
          ))}
          <Avatar src={profileData?.myProfile?.avatar} width={38} height={38} alt="avatar" />

          <div className="relative group flex-shrink-0">
            <Image
              src={exit}
              width={24}
              height={24}
              alt="exit"
              className="cursor-pointer"
              onClick={handleLogout}
            />
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Log Out
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
