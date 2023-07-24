"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"

import { DataTableColumnHeader } from "./column-header"
import { VideoActions } from "./video-actions"

import { Video } from "@/app/types"
import { deleteVideo } from "@/server"

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
    accessorKey: "fileName",
    header: ({ column }) => null,// no header
    cell: ({ row: { original: { ownerId, id, progressPercent } } }) => <div className="w-[100px]">
      <a
        className="hover:underline cursor-pointer"
        target="_blank"
        href={`${process.env.NEXT_PUBLIC_DOWNLOAD_URL}/${ownerId}/${id}.mp4`}>
        <video src={`${process.env.NEXT_PUBLIC_DOWNLOAD_URL}/${ownerId}/${id}.mp4?progress=${progressPercent || 0}`} muted />
      </a>
    </div>,
    enableSorting: false,
    enableHiding: false,
  },
  /*
  {
    accessorKey: "fileName",
    header: ({ column }) => null,
    cell: ({ row: { original: { fileName, ownerId, id }} }) => <div className="">
      <a
        className="hover:underline cursor-pointer"
        target="_blank"
        href={`${process.env.NEXT_PUBLIC_DOWNLOAD_URL}/${ownerId}/${id}.mp4`}>Save</a>
    </div>,
    enableSorting: false,
    enableHiding: false,
  },
  */
  {
    accessorKey: "delete",
    header: ({ column }) => null, // no header
    cell: ({ row: { original } }) => <div
      className="hover:underline cursor-pointer"
      onClick={() => { deleteVideo(original.ownerId, original.id) }}>Delete</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row }) => <VideoActions row={row} />,
  },
]