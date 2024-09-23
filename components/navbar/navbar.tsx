import { Avatar } from '../avatar'
import { SelectDemo } from '../select/select'
import settingsSVG from '../../public/settings.svg'
import dotsSVG from '../../public/dots.svg'
import jobTimeSVG from '../../public/jobTime.svg'
import mountainSVG from '../../public/mountain.svg'
import crossSVG from '../../public/cross.svg'
import historySVG from '../../public/history.svg'
import pigSVG from '../../public/pig.svg'
import clockSVG from '../../public/clock.svg'
import { useQuery } from '@apollo/client'
import { MY_PROFILE_QUERY } from '@/apollo/authQueries'
import Image from 'next/image'
import { TabsDemo } from '../tabs/tabs'
import { Button } from '../ui/button'
import { CardWithInfo } from '../cardWithInfo/cardWithInfo'
import { AdditionalInfo } from '../additionalInfo/additionalInfo'
import { SelectForHistoryBlock } from '../selectForHistoryBlock/SelectForHistoryBlock'
import { TableDemo } from '../table/table'

export const NavBar = () => {
  const { data: profileData } = useQuery(MY_PROFILE_QUERY)

  return (
    <div className="w-full pl-0  pr-5 md:pl-28 ml-0 h-[200px] bg-[#DAE6F2] flex flex-row justify-between  sm:pl-14 xl:pr-32 sm:pr-10">
      <div className="flex pl-6  w-max-[460px]  items-center xl:pl-0 z-30 md:flex-row">
        <Avatar src={profileData?.myProfile?.avatar} alt="avatar" width={150} height={150} />

        <h1 className="text-xl pl-4 sm:pr-16">{profileData?.myProfile?.name} Kuibyshevsky</h1>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex">
          <SelectDemo isNav selectTitle={'Request a Change'} />
          <SelectDemo isNav SVGImage={settingsSVG} />
        </div>
        <div className="md:hidden sm:pr-10">
          <Image src={dotsSVG} alt="Dots" width={20} height={20} />
        </div>
      </div>
      <div
        className="absolute lg:w-[70%] sm:w-[100%]  mt-[200px] xl:mt-[160px] lg:right-[128px]
      xl:right-[128px] right-0 w-[100%]"
      >
        <TabsDemo
          bgColor="bg-[#DAE6F2]"
          defaultValue="time off"
          bgColorActive="data-[state=active]:bg-white"
          tabList={[
            'Personal',
            'Job',
            'Time Off',
            'Emergency',
            'Documents',
            'Notes',
            'Benefits',
            'Training',
            'Assets',
            'Menu',
          ]}
        >
          <div className="p-3 xl:w-[100%] bg-[white] lg:w-[100%]">
            <div className="flex justify-end sm:justify-between">
              <div className=" sm:flex  m-4 hidden">
                <Image alt="job Time" src={jobTimeSVG} width={24} height={24} />
                <span className="ml-2">Time Off</span>
              </div>
              <div className="flex items-center flex-col justify-center   sm:flex-row">
                <span>
                  Accrual Level Start Date <span className="text-blue-500">03/09-2020</span>
                </span>
                <Button className="bg-white text-black border border-black ">
                  Add Time Off Policy
                </Button>
              </div>
            </div>

            <hr className="my-4 border-t border-gray-600" />

            <div className="flex lg:justify-between  overflow-hidden overflow-x-auto ">
              <CardWithInfo
                title="Sick"
                svg={crossSVG}
                count={3}
                description={'Days Available'}
                extraDescription={'1 day scheduled'}
                underBlockText={'Sick Full-Time'}
              />
              <CardWithInfo
                title="Annual Leave"
                svg={mountainSVG}
                count={3}
                description={'Days Available'}
                underBlockText={'Holiday Full-Time'}
              />
              <CardWithInfo
                title="Comp/in Lieu Time"
                svg={jobTimeSVG}
                count={0}
                description={'Human Used(YTD)'}
                underBlockText={'Comp/in Lieu Time Flexible Policy'}
              />
            </div>
            <div className="flex flex-row   m-4 ">
              <Image alt="Clock" src={clockSVG} width={24} height={24} />
              <span className="ml-2">Upcoming Time Off</span>
            </div>

            <hr className="my-4 border-t border-gray-600" />
            <AdditionalInfo date="Jan 24" src={crossSVG} description="1 day of Sick" />
            <hr className="my-4 border-t border-gray-600" />
            <AdditionalInfo date="Jul 4" src={pigSVG} description="Independence Day" />
            <hr className="my-4 border-t border-gray-600" />

            <div className="flex flex-row   m-4 ">
              <Image alt="history" src={historySVG} width={24} height={24} />
              <span className="ml-2">History</span>
            </div>
            <SelectForHistoryBlock />
            <TableDemo />
          </div>
        </TabsDemo>
      </div>
    </div>
  )
}
