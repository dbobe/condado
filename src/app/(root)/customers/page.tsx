"use client";

import CustomerDetails from "@/components/CustomerDetails";
import CrudBtnBar from "@/components/CrudBtnBar";

export default function Customers() {
  return (
    <div className="flex-1 overflow-auto flex flex-col justify-between">
      <CustomerDetails customer={null} />
      <CrudBtnBar />
    </div>
  );
}
