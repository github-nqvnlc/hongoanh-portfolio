"use client"

import { cn } from "@/lib/utils"
import React from "react"

export const FullScreenV2 = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) => {
  return (
    <div
      id={id}
      className={cn(
        className,
        "w-full min-h-screen flex items-center justify-center overflow-x-hidden"
      )}
    >
      {children}
    </div>
  )
}
