"use client"

import { useEffect, useTransition } from "react"
import { usePathname } from "next/navigation"

import { experimental_useFormStatus as useFormStatus } from "react-dom"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { handleFormSubmit } from "@/server/actions"

export const VideoForm = () => {
  const pathname = usePathname()
  const ownerId = pathname.split("/").pop()
  const { pending } = useFormStatus()

  return (
    <form
      action={handleFormSubmit}
    >
      <div className="flex flex-row w-full mb-3">
        <div className="flex flex-col w-1/2 text-center">
          <h2 className="text-4xl font-thin tracking-tight">VideoChain 🎬</h2>
          <p className="text-md font-thin">
            Powered by <span className="font-normal">Hugging Face 🤗</span>
          </p>
        </div>
        <div className="flex flex-col w-1/2 text-center">
          <p className="text-sl font-thin">
            For demonstration purposes only. Please use responsibly, and cancel any video you don&apos;t need anymore.
            You have been assigned this permalink ID: <a href={`/studio/${ownerId}`} className="font-normal" target="_blank">{ownerId}</a>

          </p>
        </div>
      </div>

      <div className="flex items-center justify-between md:space-x-3 w-full">
        <input
          type="hidden"
          id="ownerId"
          name="ownerId"
          value={ownerId}
        />

        <Textarea
          id="prompt"
          name="prompt"
          placeholder="3 clips of a cat playing the piano"
          className="mr-3 md:mr-0"
        />

        <Button
          variant="secondary"
          size="lg"
          className="text-md md:w-32"
          type="submit"
          disabled={pending}
        >
          {pending ? "Loading.." : "Generate"}
        </Button>
      </div>
    </form>
  )
}