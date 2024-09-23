import Image from 'next/image'

type Props = {
  src: string
  date: string
  description: string
}

export const AdditionalInfo = ({ src, date, description }: Props) => {
  return (
    <div className="flex flex-row   m-4 ">
      <Image alt="pig" src={src} width={34} height={34} />
      <div className="flex flex-col">
        <span className="ml-2">{date}</span>
        <span className="ml-2">{description}</span>
      </div>
    </div>
  )
}
