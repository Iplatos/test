import { MY_PROFILE_QUERY } from '@/apollo/myProfile'
import { useQuery } from '@apollo/client'
import Image from 'next/image'
import { ComponentPropsWithoutRef } from 'react'

export const Avatar = (props: ComponentPropsWithoutRef<typeof Image>) => {
  return <Image {...props} />
}
