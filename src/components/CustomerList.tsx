"use client";

import { FormEvent, useState } from "react";
import { customers } from "@/lib/data";
import { Input } from "@/components/ui/input";
import CustomerCard from "./customers/customer-card";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Button } from "./ui/button";
import { ChevronRight, Filter, Search, X } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function CustomerList() {
  const [filter, setFilter] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState(customers);

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
    <div className="w-64 p-4 h-full bg-sidebar text-sidebar-foreground">
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
              <CardFooter className="flex justify-end gap-4">
                <Button variant="outline" size="icon" type="submit">
                  <Search />
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  type="button"
                  onClick={handleReset}
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
        {filteredCustomers.map((customer) => (
          <Link href={`/customers/${customer.company}`} key={customer.id}>
            {/* <Button
              key={customer.id}
              variant="ghost"
              className="w-full justify-start"
            > */}
            <CustomerCard customer={customer} />
            {/* </Button> */}
          </Link>
        ))}
      </div>
    </div>
  );
}
