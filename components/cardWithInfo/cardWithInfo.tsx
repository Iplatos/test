import { Card } from '../ui/card'
import Image from 'next/image'
type Props = {
  title: string
  svg: string
  count: number
  description: string
  extraDescription?: string
  underBlockText: string
}
export const CardWithInfo = ({
  title,
  svg,
  count,
  description,
  extraDescription,
  underBlockText,
}: Props) => {
  return (
    <div className="flex-row justify-center items-center  text-center ">
      <Card className=" bg-[#F0F3F8] flex m-4 w-[264px] flex-col h-[138px] justify-center items-center ">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex items-center justify-center m-1">
          <Image alt="hash" src={svg} width={24} height={24} />
          <span className="ml-2 text-3xl font-bold  ">{count}</span>
        </div>
        <div className="ml-2  font-bold ">{description}</div>
        <div className="text-zinc-500">{extraDescription}</div>
      </Card>
      <span className="text-zinc-500">{underBlockText}</span>
    </div>
  )
}
