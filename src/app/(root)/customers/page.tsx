"use client";

import CustomerDetails from "@/components/CustomerDetails";

export default function Customers() {
  return (
    <div className="flex-1 overflow-auto flex flex-col justify-between">
      <CustomerDetails customer={null} />
    </div>
  );
}
