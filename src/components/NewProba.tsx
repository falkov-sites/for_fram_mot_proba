// 'use client'

import { cn } from "@/lib/utils"

type propsType = {
  name: string
  title: string
  className?: string
}

const NewProba = (props: propsType) => {
  const { name, title } = props

  return (
    <>
      <div
        className={cn(
          props.className,
          `m-2 flex flex-col items-center justify-center bg-sky-200 p-6 text-violet-600`,
          `__gradient-${props.color}-withHover __shadow`
        )}
        <h2>This is component NewProba</h2>
        <p>{props.name}</p>
        <p>{title}</p>
      </div>
    </>
  )
}

export { NewProba }
