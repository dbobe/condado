"use client";

import { FormEvent, useState } from "react";
import { ChevronRight, Filter } from "lucide-react";

import DateRangePicker from "@/components/date-range-picker";
import DocTypeCard from "@/components/documents/doc-type-card";
import FilterByField from "@/components/filter-by-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Documents() {
  //   const [filter, setFilter] = useState("");
  //   const [filterBy, setFilterBy] = useState("");
  const [isFilterByEnabled, setIsFilterByEnabled] = useState(false);
  const [isFilterByDateEnabled, setIsFilterByDateEnabled] = useState(false);
  // const [filteredDocuments, setFilteredDocuments] = useState();

  //   const [currentPage, setCurrentPage] = useState(1);
  //   const itemsPerPage = 10;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const filterComponent = () => {
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
          <form onSubmit={handleSubmit}>
            <Card className="pt-4">
              <CardContent>
                <div className="grid w-full items-center gap-4 grid-cols-3">
                  <div className="flex flex-row gap-2 items-center">
                    <Checkbox
                      id="filter-by"
                      onCheckedChange={(checked) =>
                        setIsFilterByEnabled(
                          checked === "indeterminate" ? false : checked
                        )
                      }
                    />
                    <label htmlFor="filter-by" className="text-sm w-24">
                      Filter by:
                    </label>
                    <FilterByField isDisabled={!isFilterByEnabled} />
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <Checkbox
                      id="filter-by-date"
                      onCheckedChange={(checked) =>
                        setIsFilterByDateEnabled(
                          checked === "indeterminate" ? false : checked
                        )
                      }
                    />
                    <label htmlFor="filter-by-date" className="text-sm w-24">
                      Filter by date:
                    </label>
                    <DateRangePicker isDisabled={!isFilterByDateEnabled} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </form>
        </CollapsibleContent>
      </Collapsible>
    );
  };
  return (
    <Tabs
      defaultValue="quoted"
      className="relative flex items-center w-full h-full"
    >
      <TabsList
        className="absolute top-0 left-0 rotate-90 origin-top-left translate-x-10"
        style={{ width: "calc(100vh - 64px - 28px - 32px)" }} // 64px is the header height, 28px Document Management text, 32px is the padding on the container
      >
        <TabsTrigger
          value="quoted"
          className="text-center flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          Quoted
        </TabsTrigger>
        <TabsTrigger
          value="ready"
          className="text-center flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          Ready to Order
        </TabsTrigger>
        <TabsTrigger
          value="ordered"
          className="text-center flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          Ordered | Confirmed
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="quoted"
        className="w-[calc(100%-64px)] absolute top-0 right-0 h-full"
      >
        <div className="flex flex-col h-full">
          {filterComponent()}
          <DocTypeCard title="Quoted" />
        </div>
      </TabsContent>
      <TabsContent
        value="ready"
        className="w-[calc(100%-64px)] absolute top-0 right-0 h-full"
      >
        <div className="flex flex-col h-full">
          {filterComponent()}
          <DocTypeCard title="Ready to Order" />
        </div>
      </TabsContent>
      <TabsContent
        value="ordered"
        className="w-[calc(100%-64px)] absolute top-0 right-0 h-full"
      >
        <div className="flex flex-col h-full">
          {filterComponent()}
          <DocTypeCard title="Ordered | Confirmed" />
        </div>
      </TabsContent>
    </Tabs>
  );
}
