"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { FilterIcon, SearchIcon, XIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";

export default function FilterByField({
  className,
  isDisabled,
}: HTMLAttributes<HTMLDivElement> & {
  isDisabled?: boolean;
}) {
  const [selectedField, setSelectedField] = useState<string>();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleCancel = () => {
    setSelectedField(undefined);
    setSearchTerm("");
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild disabled={isDisabled}>
          <Button
            id="filter-by-field"
            variant="outline"
            className="w-[300px] justify-start text-left font-normal"
          >
            <FilterIcon />
            {selectedField ? (
              <span>Filtering by {selectedField}</span>
            ) : (
              <span>Filter by field</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 bg-sidebar p-4" align="start">
          <div className="flex flex-col gap-4">
            <Select
              onValueChange={(value) => setSelectedField(value)}
              value={selectedField}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select field" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="documentNumber">Document Number</SelectItem>
                <SelectItem value="orderNumber">Order Number</SelectItem>
                <SelectItem value="customer">Customer</SelectItem>
                <SelectItem value="jobType">Job Type</SelectItem>
                <SelectItem value="orderStatus">Order Status</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex flex-row gap-4 justify-end">
              <Button
                variant="outline"
                size="icon"
                title="Search"
                aria-label="Search"
              >
                <SearchIcon />
              </Button>
              <Button
                variant="outline"
                size="icon"
                title="Cancel"
                aria-label="Cancel"
                className="text-destructive border-destructive"
                onClick={handleCancel}
              >
                <XIcon />
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
