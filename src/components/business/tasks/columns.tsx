"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"

import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"

import { VideoTask } from "@/app/types"

export const columns: ColumnDef<VideoTask>[] = [
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
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] font-medium">
            {row.getValue("videoPrompt")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "progressPercent",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Progress" />
    ),
    cell: ({ row }) => {
      const progress = Number(row.getValue("progressPercent") || 0)

      return (
        <div className="flex w-[30px] items-center">
          <span>{progress}%</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "preview",
    header: ({ column }) => (
      null // no header
    ),
    cell: ({ row }) => <div className="w-[120px]">
      <a
        className="hover:underline cursor-pointer"
        target="_blank"
        href={`${process.env.NEXT_PUBLIC_DOWNLOAD_URL}/${row.getValue("fileName")}`}>
        <video src={`${process.env.NEXT_PUBLIC_DOWNLOAD_URL}/${row.getValue("fileName")}?progress=${row.getValue("progressPercent") || 0}`} muted />
      </a>
    </div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "fileName",
    header: ({ column }) => (
      null // no header
    ),
    cell: ({ row }) => <div className="w-[80px]">
      <a
        className="hover:underline cursor-pointer"
        target="_blank"
        href={`${process.env.NEXT_PUBLIC_DOWNLOAD_URL}/${row.getValue("fileName")}`}>Download</a>
    </div>,
    enableSorting: false,
    enableHiding: false,
  },
  /*
  action menu (currently disabled)
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
  */
]