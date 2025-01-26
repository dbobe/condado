import CustomerList from "@/components/CustomerList";
import { getCustomers } from "@/lib/actions/customer";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  const customers = await getCustomers();
  return (
    <div className="flex flex-1 flex-col size-full">
      <div className="px-2 w-full h-min bg-sidebar text-primary-foreground">
        <h1 className="text-lg">Customer Management</h1>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <CustomerList customers={customers} />
        <div className="flex-1 overflow-auto flex flex-col justify-between">
          {children}
        </div>
      </div>
    </div>
  );
}
