import Image from 'next/image'

interface SkillCardProps {
  image: string
  name: string
}

export function SkillCard({ image, name }: SkillCardProps) {
  return (
    <div className="group relative flex h-[8.75rem] w-[8.75rem] items-center justify-center overflow-hidden rounded-lg border border-gray-500 bg-zinc-800">
      <Image src={image} width={70} height={70} alt={name} />
      <div className="absolute hidden h-[10rem] w-[10rem] bg-gradient-to-b from-slate-700/20 to-black group-hover:block">
        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-poppins text-white">
          {name}
        </span>
      </div>
    </div>
  )
}