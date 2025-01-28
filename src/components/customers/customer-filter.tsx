import { FormEvent } from "react";
import { ChevronRight, Filter, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";

interface CustomerFilterProps {
  filter: string;
  filterBy: string;
  onFilterChange: (value: string) => void;
  onFilterByChange: (value: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onReset: () => void;
}

export function CustomerFilter({
  filter,
  filterBy,
  onFilterChange,
  onFilterByChange,
  onSubmit,
  onReset,
}: CustomerFilterProps) {
  return (
    <Collapsible className="mb-4">
      <CollapsibleTrigger asChild className="group/collapsible">
        <Button variant="ghost" size="lg" className="w-full justify-start">
          <Filter />
          <span>Filter by</span>
          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <form onSubmit={onSubmit}>
          <Card className="pt-4">
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <Select onValueChange={onFilterByChange} value={filterBy}>
                  <SelectTrigger id="filter-by">
                    <SelectValue placeholder="Select a field" />
                  </SelectTrigger>
                  <SelectContent>
                    {/* TODO: Make the fields dynamic, using a schema or type */}
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="phone">Phone</SelectItem>
                    <SelectItem value="address">Address</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Search"
                  value={filter}
                  onChange={(e) => onFilterChange(e.target.value)}
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
                onClick={onReset}
                className="text-accent-foreground hover:text-destructive"
              >
                <X />
              </Button>
            </CardFooter>
          </Card>
        </form>
      </CollapsibleContent>
    </Collapsible>
  );
}
