"use client"

import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"

const key = "VideoChain-UI-Owner-ID"

export default function Index() {
  const [uuid, setUuid] = useState<string>()

  useEffect(() => {
    if (uuid) {
      window.location.href = `/studio/${uuid}`
    } else {
      const existingUuid = `${localStorage.getItem(key)} || ""`
      if (existingUuid?.length > 10) {
        setUuid(existingUuid)
      } else {
        const newUuid = uuidv4()
        setUuid(newUuid)
        localStorage.setItem(key, newUuid)
      }
    }
  }, [uuid])
 
  return <div>Loading..</div>
}