import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useOrganization } from "@/contexts/organization-context";
import { useQuery } from "@tanstack/react-query";
import { Building } from "lucide-react";

export function OrganizationSwitcher() {
  const { currentOrganization, setCurrentOrganization } = useOrganization();

  const { data: organizations } = useQuery({
    queryKey: ["organizations"],
    queryFn: async () => {
      const response = await fetch("/api/organizations");
      return response.json();
    },
  });

  if (!organizations?.length) return null;

  return (
    <Select
      value={currentOrganization?.id}
      onValueChange={(orgId) => {
        const org = organizations.find((o: any) => o.id === orgId);
        setCurrentOrganization(org);
      }}
    >
      <SelectTrigger className="w-[200px]">
        <Building className="mr-2 h-4 w-4" />
        <SelectValue placeholder="Select organization" />
      </SelectTrigger>
      <SelectContent>
        {organizations.map((org: any) => (
          <SelectItem key={org.id} value={org.id}>
            {org.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
