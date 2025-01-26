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
      const stockLevel: string = row.getValue("stockLevel");

      if (stockLevel === "Full") {
        customClasses = "bg-badge-full text-badge-full-foreground";
      } else if (stockLevel === "High") {
        customClasses = "bg-badge-high text-badge-high-foreground";
      } else if (stockLevel === "Medium") {
        customClasses = "bg-badge-medium text-badge-medium-foreground";
      } else if (stockLevel === "Low") {
        customClasses = "bg-badge-low text-badge-low-foreground";
      } else if (stockLevel === "Critical") {
        customClasses = "bg-badge-critical text-badge-critical-foreground";
      }

      return (
        <Badge variant="outline" className={cn("w-full h-8", customClasses)}>
          <span className="text-xs text-center w-full">{stockLevel}</span>
        </Badge>
      );
    },
  },
];
