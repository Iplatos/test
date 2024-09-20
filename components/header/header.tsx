import { TabsDemo } from '../tabs/tabs'
import { Input } from '../ui/input'
import Image from 'next/image'
import searchSVG from '../../public/search.svg'
import bellSVG from '../../public/bell.svg'
import settingsSVG from '../../public/settings.svg'
import questionSVG from '../../public/question.svg'
import burgerSVG from '../../public/burger.svg'
import { Avatar } from '../avatar'

const officeIcons = [
  { src: settingsSVG, alt: 'settings' },
  { src: questionSVG, alt: 'question' },
  { src: bellSVG, alt: 'bell' },
]

export const Header = () => {
  return (
    <header className="w-full h-[86px] flex flex-col justify-between p-8 bg-white">
      <div className="flex items-center justify-between">
        <nav className="flex items-center"></nav>
      </div>
      <div className="flex justify-between items-center h-full gap-5 lg:gap-0">
        <h1 className="text-xl font-bold">HarmonyHR</h1>

        <div className="mt-11 hidden lg:block">
          <TabsDemo />
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
            <Avatar />
          </div>
        </div>

        <div>
          <div className="hidden lg:flex items-center justify-center w-[179px] h-[38px] gap-4">
            {officeIcons.map((icon) => (
              <Image key={icon.alt} src={icon.src} width={24} height={24} alt={icon.alt} />
            ))}
            <Avatar />
          </div>
        </div>
      </div>
    </header>
  )
}
