import { ChevronLeft } from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { ChevronRight, ChevronsLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChevronsRight } from "lucide-react";

interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  hasItems: boolean;
  onPageChange: (page: number) => void;
}

export function CustomPagination({
  currentPage,
  totalPages,
  hasItems,
  onPageChange,
}: CustomPaginationProps) {
  return (
    <Pagination className="bg-sidebar">
      <PaginationContent className="w-full justify-between">
        <PaginationItem>
          <PaginationLink
            size="icon"
            aria-label="Go to first page"
            className={cn(
              "bg-muted",
              (currentPage === 1 || !hasItems) &&
                "pointer-events-none bg-muted/20 text-muted-foreground/20"
            )}
            onClick={() => onPageChange(1)}
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
              (currentPage === 1 || !hasItems) &&
                "pointer-events-none bg-muted/20 text-muted-foreground/20"
            )}
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          >
            <ChevronLeft />
          </PaginationLink>
        </PaginationItem>
        {hasItems ? (
          <div className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </div>
        ) : (
          <div className="text-sm text-muted">Page 0 of 0</div>
        )}
        <PaginationItem>
          <PaginationLink
            size="icon"
            aria-label="Go to next page"
            className={cn(
              "bg-muted",
              (currentPage === totalPages || !hasItems) &&
                "pointer-events-none bg-muted/20 text-muted-foreground/20"
            )}
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
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
              (currentPage === totalPages || !hasItems) &&
                "pointer-events-none bg-muted/20 text-muted-foreground/20"
            )}
            onClick={() => onPageChange(totalPages)}
          >
            <ChevronsRight />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
