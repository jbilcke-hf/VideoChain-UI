"use client"

import { useEffect, useTransition } from "react"
import { usePathname } from "next/navigation"

import { refreshStudio } from "@/server/actions"

export function RefreshStudio() {
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  
  useEffect(() => {
    const slug = `${pathname.split("/").pop()}`
    setInterval(() => {
      console.log("refresh things!", slug)
      startTransition(() => {
        try {
          refreshStudio(slug)
        } catch (err) {
          // ignoring
        }
      })
    }, 2000)
  }, [])
  
  // TODO we could display a spinner here
  return <></>
}