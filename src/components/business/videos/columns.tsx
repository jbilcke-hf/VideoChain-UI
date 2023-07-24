"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"

import { DataTableColumnHeader } from "./column-header"

import { Video } from "@/app/types"
import { triggerDownload } from "@/lib/triggerDownload"
import { ChangeStatusButton } from "./change-status-button"

export const columns: ColumnDef<Video>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select video"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => null,
    cell: ({ row }) => null,
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "videoPrompt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Prompt" />
    ),
    cell: ({ row: { original: { videoPrompt }} }) => (
      <div className="flex space-x-2">
        <span className="max-w-[500px] font-medium">{videoPrompt}</span>
      </div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "progressPercent",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Progress" />
    ),
    cell: ({ row: { original: { progressPercent }} }) => (
      <div className="flex items-center"><span>{Number(progressPercent || 0)}%</span></div>
    ),
    enableSorting: false,
  },
  {
    id: "preview",
    header: ({ column }) => null,// no header
    cell: ({ row: { original: { ownerId, id, progressPercent } } }) => <div className="w-[100px]">
      <video src={`${process.env.NEXT_PUBLIC_DOWNLOAD_URL}/${ownerId}/${id}.mp4?progress=${progressPercent || 0}`} muted />
    </div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "save",
    header: ({ column }) => null,
    cell: ({ row: { original: { ownerId, id }} }) => <div className="">
      <a
        className="hover:underline cursor-pointer"
        target="_blank"
        href={`${process.env.NEXT_PUBLIC_DOWNLOAD_URL}/${ownerId}/${id}.mp4`}>Save</a>
    </div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "scene",
    header: ({ column }) => null,
    cell: ({ row: { original } }) => {
      const scene = JSON.stringify({
        videoPrompt: original.videoPrompt,
        backgroundAudioPrompt: original.backgroundAudioPrompt,
        foregroundAudioPrompt: original.foregroundAudioPrompt,
        shots: original.shots.map(shot => ({
          shotPrompt: shot.shotPrompt,
          backgroundAudioPrompt: shot.backgroundAudioPrompt,
          foregroundAudioPrompt: shot.foregroundAudioPrompt,
          actorPrompt: shot.actorPrompt,
          actorVoicePrompt: shot.actorVoicePrompt,
          actorDialoguePrompt: shot.actorDialoguePrompt,
        }))
      }, null, 2)
      return (<div className="">
        <a
          className="hover:underline cursor-pointer"
          target="_blank"
          onClick={() => triggerDownload("scene.json", scene)}>Scene</a>
      </div>
      )
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "delete",
    header: ({ column }) => null, // no header
    cell: ({ row: { original } }) =>
      <ChangeStatusButton video={original} status="delete">Delete</ChangeStatusButton>,
    enableSorting: false,
    enableHiding: false,
  },
  /*
  {
    id: "actions",
    cell: ({ row }) => <VideoActions row={row} />,
  },
  */
]