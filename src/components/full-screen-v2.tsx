"use client"

import { cn } from "@/lib/utils"
import React from "react"

export const FullScreenV2 = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        className,
        "w-full min-h-[100vh] flex items-center justify-center overflow-x-hidden"
      )}
    >
      {children}
    </div>
  )
}
