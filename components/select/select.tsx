import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Image from 'next/image'
type PropsType = {
  selectTitle?: string
  SVGImage?: string
  isNav?: boolean
}

export const SelectDemo = ({ isNav, selectTitle, SVGImage }: PropsType) => {
  return (
    <div className="bg-[white]">
      <Select>
        <SelectTrigger className="min-w-[52px] max-w-[162px] w-auto">
          {selectTitle ? (
            <SelectValue placeholder={selectTitle} />
          ) : (
            <Image src={SVGImage} height={16} width={16} alt="settings" />
          )}
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
