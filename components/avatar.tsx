import Image from 'next/image'
import { ComponentPropsWithoutRef } from 'react'

export const Avatar = (props: ComponentPropsWithoutRef<typeof Image>) => {
  return <Image className="rounded-full z-50 " {...props} />
}
