// "use client";

import SalesChart from "@/components/dummyData/sales-chart";
import { InventoryTable } from "@/components/dummyData/inventory-table";
import { columns } from "@/components/dummyData/columns";
import { inventory } from "@/lib/data";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (!session) {
    return redirect("/sign-in");
  }

  return (
    <div className="h-screen flex flex-col px-16">
      <h1 className="text-2xl font-bold mt-4">
        Welcome back, {session?.user?.name}!
      </h1>

      <div className="flex flex-col gap-8 mt-8">
        <SalesChart />
        <InventoryTable columns={columns} data={inventory} />
      </div>
    </div>
  );
}
