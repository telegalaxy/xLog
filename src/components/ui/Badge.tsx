import { cn } from "~/lib/utils"
import React from "react"

export const Badge: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  return (
    <span
      className={cn(
        `relative rounded uppercase bg-yellow-400 text-white h-5 inline-flex items-center px-1 font-semibold text-xs`,
        className,
      )}
    >
      {children}
    </span>
  )
}
