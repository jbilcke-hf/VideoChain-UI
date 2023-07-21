"use server"

// import { experimental_useFormStatus as useFormStatus } from "react-dom"
 
import { VideoTasksQueue } from "@/components/business/tasks/video-tasks-queue"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { formSubmit } from "@/server/actions"
import { getTasks } from "@/server"

export default async function Main({ ownerId }: { ownerId: string }) {
  const tasks = await getTasks(ownerId)

  return (
    <form
      className="h-full flex flex-col space-y-4 max-w-4xl w-full px-4 py-8"
      action={formSubmit}
      >

      <div className="flex flex-col md:hidden w-full text-center">
        <h2 className="text-4xl font-thin tracking-tight">VideoChain UI</h2>
        <p className="text-md font-thin">
          Powered by <span className="font-normal">Hugging Face 🤗</span>
        </p>
      </div>

      <div className="flex items-center justify-between md:space-x-3 w-full">
        <div className="hidden md:flex flex-col w-54">
          <h2 className="text-4xl font-thin tracking-tight">VideoChain UI</h2>
          <p className="text-md font-thin">
            Powered by <span className="font-normal">Hugging Face 🤗</span>
          </p>
          <p className="text-md font-thin">
            Keep the <a href={`/studio/${ownerId}`} className="font-normal" target="_blank">the link</a> to this page!
          </p>
        </div>

        <input
          type="hidden"
          id="ownerId"
          name="ownerId"
          value={ownerId}
        />

        <Textarea
          id="prompt"
          name="prompt"
          placeholder="Video of llamas playing baseball.."
          className="md:w-3/6 mr-3 md:mr-0"
        />

        <Button
          variant="secondary"
          size="lg"
          className="text-md md:w-32"
          type="submit"
        >
          Generate
        </Button>
      </div>
      <VideoTasksQueue tasks={tasks} />
    </form>
  )
}