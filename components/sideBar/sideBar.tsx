import { Card } from '../ui/card'
import networksSVG from '../../public/networks.svg'
import phoneSVG from '../../public/phone.svg'
import emailSVG from '../../public/email.svg'
import hashSVG from '../../public/hash.svg'
import clockSVG from '../../public/clock.svg'
import globeSVG from '../../public/Globe.svg'
import gpsPlaceSVG from '../../public/gpsPlace.svg'
import userGroupSVG from '../../public/userGroup.svg'
import userSVG from '../../public/user.svg'

import Image from 'next/image'

export const SideBar = () => {
  return (
    <div className="flex relative bottom-[20px] h-100% z-1 p-0 w-[100%]  xl:pr-32">
      <div className="w-[20%]  z-30 pl-[72px] h-[1100px] hidden xl:block">
        <div className="w-[225px] h-[664px]">
          <Card className="w-[100%] mb-5 p-6">
            <div className="flex items-center mb-4">
              <Image alt="phone" src={phoneSVG} width={24} height={24} />
              <span className="ml-2">09121 432562</span>
            </div>
            <div className="flex items-center mb-4">
              <Image alt="email" src={emailSVG} width={24} height={24} />
              <span className="ml-2">crazycatlover@yandex</span>
            </div>
            <div className="flex items-center">
              <Image alt="netWorks" src={networksSVG} width={106} height={27} />
            </div>
          </Card>
          <Card className="w-[100%] mb-5 p-6">
            <div className="flex items-center mb-4">Hire Date</div>
            <div className="flex items-center ">Sep. 3,2012</div>
            <div className="flex items-center ">3y - 9m - 20d</div>
          </Card>
          <Card className="w-[100%] mb-5 p-6">
            <div className="flex items-center mb-4">
              <Image alt="hash" src={hashSVG} width={24} height={24} />
              <span className="ml-2">8</span>
            </div>
            <div className="flex items-center mb-4">
              <Image alt="clock" src={clockSVG} width={24} height={24} />
              <span className="ml-2">Part-Time</span>
            </div>
            <div className="flex items-center mb-4">
              <Image alt="userGroup" src={userGroupSVG} width={24} height={24} />
              <span className="ml-2">Operations</span>
            </div>
            <div className="flex items-center mb-4">
              <Image alt="globe" src={globeSVG} width={24} height={24} />
              <span className="ml-2">Europe</span>
            </div>
            <div className="flex items-center mb-4">
              <Image alt="GPSPlace" src={gpsPlaceSVG} width={24} height={24} />
              <span className="ml-2">London, UK</span>
            </div>
          </Card>
          <Card className="w-[100%] mb-5 p-6">
            <div className="flex items-center mb-4">Direct Reports</div>
            <div className="flex items-center mb-4">
              <Image alt="user" src={userSVG} width={24} height={24} />
              <span className="ml-2">Shane</span>
            </div>
            <div className="flex items-center mb-4">
              <Image alt="user" src={userSVG} width={24} height={24} />
              <span className="ml-2">Shane</span>
            </div>{' '}
            <div className="flex items-center mb-4">
              <Image alt="user" src={userSVG} width={24} height={24} />
              <span className="ml-2">Shane</span>
            </div>{' '}
            <div className="flex items-center mb-4">
              <Image alt="user" src={userSVG} width={24} height={24} />
              <span className="ml-2">Shane</span>
            </div>{' '}
            <div className="flex items-center mb-4">
              <Image alt="userGroup" src={userGroupSVG} width={24} height={24} />
              <span className="ml-2">4 More...</span>
            </div>{' '}
          </Card>
        </div>
      </div>
    </div>
  )
}
