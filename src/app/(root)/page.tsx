"use client";

import SalesChart from "@/components/dummyData/sales-chart";
import { InventoryTable } from "@/components/dummyData/inventory-table";
import { columns } from "@/components/dummyData/columns";
import { inventory } from "@/lib/data";
import { user } from "@/components/app-sidebar";

export default function Home() {
  const { name } = user;
  console.log(name);

  return (
    <div className="h-screen flex flex-col px-16">
      <h1 className="text-2xl font-bold mt-4">Welcome back, {name}!</h1>

      <div className="flex flex-col gap-8 mt-8">
        <SalesChart />
        <InventoryTable columns={columns} data={inventory} />
      </div>
    </div>
  );
}
