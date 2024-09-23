import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ReactNode } from 'react'

type Props = {
  tabList: string[]
  bgColor: string
  bgColorActive: string
  defaultValue: string
  children?: ReactNode
}

export const TabsDemo = ({ tabList, bgColor, bgColorActive, defaultValue, children }: Props) => {
  return (
    <Tabs defaultValue={defaultValue}>
      <TabsList className="flex overflow-hidden overflow-x-auto rounded-md md:flex">
        {tabList.map((tab) => (
          <TabsTrigger
            key={tab}
            value={tab.toLowerCase()}
            className={`flex-grow h-[59px] flex items-center justify-center text-[18px] leading-[21.78px] font-inter font-normal ${bgColor} ${bgColorActive}`}
          >
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="time off">{children}</TabsContent>
    </Tabs>
  )
}
