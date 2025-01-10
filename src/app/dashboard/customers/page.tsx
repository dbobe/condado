"use client";

import { useState } from "react";
import { Customer } from "@/lib/data";
import CustomerList from "@/components/CustomerList";
import CustomerDetails from "@/components/CustomerDetails";

export default function Customers() {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  return (
    <div className="flex flex-1 flex-col h-full">
      <div className="bg-primary p-4 w-full h-min">
        <h1 className="text-lg">Customer Management</h1>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <CustomerList onSelectCustomer={setSelectedCustomer} />
        <div className="flex-1 overflow-auto">
          <CustomerDetails customer={selectedCustomer} />
        </div>
      </div>
    </div>
  );
}
