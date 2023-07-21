"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"

import { statuses } from "@/app/data/data"

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
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Video ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{`${row.getValue("id") || ''}`.split("-")[0]}..</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "videoPrompt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Prompt" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("videoPrompt")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
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
    cell: ({ row }) => <div className="w-[200px]">
      <a
        className="hover:underline cursor-pointer"
        target="_blank"
        href={`/api/download/${row.getValue("fileName")}`}>
        <video src={`/api/download/${row.getValue("fileName")}`} muted autoPlay />
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
        href={`/api/download/${row.getValue("fileName")}`}>Download</a>
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