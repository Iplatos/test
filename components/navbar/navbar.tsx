import { Avatar } from '../avatar'
import { SelectDemo } from '../select/select'
import settingsSVG from '../../public/settings.svg'
import dotsSVG from '../../public/dots.svg'
import { useQuery } from '@apollo/client'
import { MY_PROFILE_QUERY } from '@/apollo/myProfile'
import Image from 'next/image'

export const NavBar = () => {
  const { data: profileData } = useQuery(MY_PROFILE_QUERY)

  return (
    <div className="w-full pr-6 md:pl-28 h-[200px] bg-[#DAE6F2] flex flex-row justify-between z-20 sm:pl-14 sm:pr-10 ">
      <div className="flex pl-6 w-max-[460px] items-center md:flex-row">
        <Avatar
          className="rounded-full "
          width={150}
          height={150}
          src={profileData?.myProfile?.avatar}
          alt="avatar"
        />
        <h1 className="text-xl pl-8 sm:pr-16">John Kuibyshevsky</h1>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex">
          <SelectDemo selectTitle={'Request a Change'} />
          <SelectDemo SVGImage={settingsSVG} />
        </div>
        <div className="md:hidden  sm:pr-10">
          <Image src={dotsSVG} alt="Dots" width={20} height={20} />
        </div>
      </div>
    </div>
  )
}
