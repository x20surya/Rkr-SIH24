import React from 'react'
const columns=[
    {
        accessorKey: "orderid",
        header: "Order ID",
      },{
        accessorKey: "productname",
        header: "Product Name",
      },{
        accessorKey: "amount",
        header: "Amount",
      },
      {
        accessorKey: "date",
        header: "Date",
      }
]
const data=[
    {
      "orderid": "order1",
      "productname": "Product A",
      "amount": 100.00,
      "date": "2023-12-31"
    },
    {
      "orderid": "order2",
      "productname": "Product B",
      "amount": 250.00,
      "date": "2024-01-15"
    },
    {
      "orderid": "order3",
      "productname": "Product C",
      "amount": 75.00,
      "date": "2024-02-08"
    },
    {
      "orderid": "order4",
      "productname": "Product D",
      "amount": 150.00,
      "date": "2024-03-22"
    },
    {
      "orderid": "order5",
      "productname": "Product E",
      "amount": 300.00,
      "date": "2024-04-10"
    }
  ]

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export function DataTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader className="bg-primary">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
