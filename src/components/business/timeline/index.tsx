"use client"

import { ReactGrid, Column, Row } from "@silevis/reactgrid"
import "@silevis/reactgrid/styles.css"
import { useState } from "react"

type RowData = Record<string, string>

const nbColumns = 20

const getRowsData = (nbLayers: number, nbShots: number): RowData[] => [
  { name: "Thomas", surname: "Goldman" },
  { name: "Susie", surname: "Quattro" },
  { name: "", surname: "" }
];

const getColumns = (nbColumns: number): Column[] => {
  
  const columns: Column[] = []
  for (let i = 0; i < nbColumns; i++) {
    columns.push({
      columnId: `Shot ${i}`,
      width: 150,
    })
  }

  return columns
}



const getRows = (nbShots: number, rows: RowData[]): Row[] => [
  {
    rowId: 'header',
    cells: [...Array(nbShots)].map((_, i) => ({
      type: "text",
      text: `Shot ${i}`,
    })),
  },
  ...rows.map<Row>((row, idx) => ({
    rowId: idx,
    cells: Object.entries(row).map(([_, value]) => ({
      type: "text",
      text: value
    }))
  }))
]

export function Timeline() {

  const nbLayers = 8
  const nbShots = 30

  const [rowsData] = useState<RowData[]>(getRowsData(nbLayers, nbShots))

  const rows = getRows(nbShots, rowsData)
  const columns = getColumns(nbShots)

  return (
    <ReactGrid
      rows={rows}
      columns={columns}
      onCellsChanged={(changes) => {
        const change = changes[0]
        const { columnId, newCell, previousCell, rowId, type } = change

        console.log('change:', { columnId, newCell, previousCell, rowId, type })
      }}
    />
  )
}