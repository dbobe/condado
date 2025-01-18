import CustomerList from "@/components/CustomerList";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col size-full">
      <div className="p-4 w-full h-min bg-primary text-primary-foreground">
        <h1 className="text-lg">Customer Management</h1>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="flex justify-between flex-col">
          <CustomerList />
          <Pagination className="bg-sidebar">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        <div className="flex-1 overflow-auto flex flex-col justify-between">
          {children}
        </div>
      </div>
    </div>
  );
}
