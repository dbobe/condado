"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

export type InventoryPart = {
  stockCode: string;
  description: string;
  qtyOnHand: number;
  qtyOnSalesOrder: number;
  qtyOnPurchaseOrder: number;
  minStockLevel?: number;
  maxStockLevel?: number;
  stockLevel: "Low" | "Medium" | "High" | "Critical" | "Full";
};

export const columns: ColumnDef<InventoryPart>[] = [
  { accessorKey: "description", header: "Description" },
  { accessorKey: "qtyOnHand", header: "Qty On Hand" },
  { accessorKey: "qtyOnSalesOrder", header: "Qty On Sales Order" },
  { accessorKey: "qtyOnPurchaseOrder", header: "Qty On Purchase Order" },
  {
    accessorKey: "stockLevel",
    header: "Stock Level",
    cell: ({ row }) => {
      let customClasses = "";
      const stockLevel = row.getValue("stockLevel");

      if (stockLevel === "Full") {
        customClasses = "bg-green-500";
      } else if (stockLevel === "High") {
        customClasses = "bg-blue-500";
      } else if (stockLevel === "Medium") {
        customClasses = "bg-orange-500";
      } else if (stockLevel === "Low") {
        customClasses = "bg-red-500";
      } else if (stockLevel === "Critical") {
        customClasses = "bg-red-800";
      }
      return (
        <Badge variant="outline" className={cn("w-full h-8", customClasses)}>
          <span className="text-xs text-center w-full">
            {stockLevel as string}
          </span>
        </Badge>
      );
    },
  },
];
