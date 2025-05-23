"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { Partner } from "@prisma/client";
import { CustomerFilter } from "./customers/customer-filter";
import { SidelistCard } from "./sidelist-card";
import { CustomPagination } from "./custom-pagination";
import Link from "next/link";
import { getTotalPages, paginate } from "@/lib/utils";

interface CustomerListProps {
  customers: Partner[];
}

export default function CustomerList({ customers }: CustomerListProps) {
  const pathname = usePathname();

  const companyId = pathname.split("/").pop();

  const [filter, setFilter] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [filteredCustomers, setFilteredCustomers] =
    useState<Partner[]>(customers);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = getTotalPages(filteredCustomers, itemsPerPage);
  const paginatedCustomers = paginate(
    filteredCustomers,
    currentPage,
    itemsPerPage
  ) as Partner[];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!filterBy || !filter) {
      setFilteredCustomers(customers);
      return;
    }

    const filtered = customers.filter((customer) => {
      const value = customer[filterBy as keyof typeof customer];
      if (!value) return false;

      return value.toString().toLowerCase().includes(filter.toLowerCase());
    });
    setFilteredCustomers(filtered);
  };

  const handleReset = () => {
    setFilter("");
    setFilterBy("");
    setFilteredCustomers(customers);
  };

  return (
    <div className="w-72 p-2 h-full bg-sidebar text-sidebar-foreground flex flex-col">
      <CustomerFilter
        filter={filter}
        filterBy={filterBy}
        onFilterChange={setFilter}
        onFilterByChange={setFilterBy}
        onSubmit={handleSubmit}
        onReset={handleReset}
      />
      <div className="space-y-2">
        <h3 className="font-bold mb-2">Customers</h3>
      </div>
      <div className="flex flex-col flex-1 justify-between">
        <div className="flex-1 overflow-auto">
          <div className="divide-y overflow-hidden">
            {paginatedCustomers.length === 0 ? (
              <div className="px-4 py-3 text-muted-foreground">
                No customers found
              </div>
            ) : (
              paginatedCustomers.map((customer) => (
                <Link href={`/customers/${customer.id}`} key={customer.id}>
                  <SidelistCard
                    key={customer.id}
                    customer={customer}
                    isSelected={companyId === customer.id}
                  />
                </Link>
              ))
            )}
          </div>
        </div>
        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          hasItems={paginatedCustomers.length > 0}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
