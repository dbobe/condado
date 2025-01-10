"use client";

import { useState } from "react";
import { customers, Customer } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CustomerListProps {
  onSelectCustomer: (customer: Customer) => void;
}

export default function CustomerList({ onSelectCustomer }: CustomerListProps) {
  const [filter, setFilter] = useState("");

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(filter.toLowerCase()) ||
      customer.company?.toLowerCase().includes(filter.toLowerCase())
  );
  console.log("🚀 ~ CustomerList ~ filteredCustomers:", filteredCustomers);

  return (
    <div className="w-64 p-4 h-full border-r border-primary-foreground">
      <h5 className="font-bold mb-2">Filter by name or company</h5>
      <Input
        placeholder="Search customers..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4"
      />
      <div className="space-y-2">
        <h3 className="font-bold mb-2">Customers</h3>
        {filteredCustomers.map((customer) => (
          <Button
            key={customer.id}
            variant="ghost"
            className="w-full justify-start"
            onClick={() => onSelectCustomer(customer)}
          >
            {customer.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
