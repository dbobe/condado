import { ComponentProps } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight, Filter, Search, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

export default function CustomerSidebar({
  ...props
}: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <Collapsible asChild className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={"Filter"}>
                    <Filter />
                    <span>Filter By</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <Card>
                    <CardContent>
                      <form>
                        <div className="grid w-full items-center gap-4">
                          <Select>
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
                          <Input placeholder="Search" />
                        </div>
                      </form>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-4">
                      <Button variant="outline" size="icon">
                        <Search />
                      </Button>
                      <Button variant="destructive" size="icon">
                        <X />
                      </Button>
                    </CardFooter>
                  </Card>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
