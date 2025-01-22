"use client";

import { FormEvent, useState } from "react";
import { customers } from "@/lib/data";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Button } from "./ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Filter,
  Search,
  X,
} from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "./ui/pagination";

export default function CustomerList() {
  const [filter, setFilter] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState(customers);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const pathname = usePathname();

  const company = decodeURIComponent(pathname.split("/").pop() || "");

  // Calculate pagination
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
      <Collapsible className="mb-4">
        <CollapsibleTrigger asChild className="group/collapsible">
          <Button variant="ghost" size="lg" className="w-full justify-start">
            <Filter />
            <span>Filter by</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <form onSubmit={handleSubmit}>
            <Card className="pt-4">
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <Select onValueChange={(value) => setFilterBy(value)}>
                    <SelectTrigger id="filter-by">
                      <SelectValue placeholder="Select a field" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="name">Name</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="company">Company</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Search"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" size="icon" type="submit">
                  <Search />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  type="button"
                  onClick={handleReset}
                  className="text-accent-foreground hover:text-destructive"
                >
                  <X />
                </Button>
              </CardFooter>
            </Card>
          </form>
        </CollapsibleContent>
      </Collapsible>
      <div className="space-y-2">
        <h3 className="font-bold mb-2">Customers</h3>
      </div>
      <div className="flex flex-col flex-1 justify-between">
        <div className="flex-1 overflow-auto">
          <div className="divide-y overflow-hidden">
            {paginatedCustomers.map((customer) => (
              <Link href={`/customers/${customer.company}`} key={customer.id}>
                <button
                  // variant="ghost"
                  className={cn(
                    "w-full px-4 py-3 flex flex-col items-start justify-center hover:bg-accent transition-colors",
                    company === customer.company && "bg-accent"
                  )}
                >
                  <div className="font-medium">{customer.company}</div>
                  <div className="text-sm text-muted-foreground truncate">
                    {customer.name} • {customer.email}
                  </div>
                </button>
              </Link>
            ))}
          </div>
        </div>
        <Pagination className="bg-sidebar">
          <PaginationContent className="w-full justify-between">
            <PaginationItem>
              <PaginationLink
                size="icon"
                aria-label="Go to first page"
                className={cn(
                  "bg-muted",
                  currentPage === 1 &&
                    "pointer-events-none bg-muted/20 text-muted-foreground/20"
                )}
                onClick={() => setCurrentPage(1)}
              >
                <ChevronsLeft />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                size="icon"
                aria-label="Go to previous page"
                className={cn(
                  "bg-muted",
                  currentPage === 1 &&
                    "pointer-events-none bg-muted/20 text-muted-foreground/20"
                )}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              >
                <ChevronLeft />
              </PaginationLink>
            </PaginationItem>
            <div className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </div>
            <PaginationItem>
              <PaginationLink
                size="icon"
                aria-label="Go to next page"
                className={cn(
                  "bg-muted",
                  currentPage === totalPages &&
                    "pointer-events-none bg-muted/20 text-muted-foreground/20"
                )}
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
              >
                <ChevronRight />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                size="icon"
                aria-label="Go to last page"
                className={cn(
                  "bg-muted",
                  currentPage === totalPages &&
                    "pointer-events-none bg-muted/20 text-muted-foreground/20"
                )}
                onClick={() => setCurrentPage(totalPages)}
              >
                <ChevronsRight />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
