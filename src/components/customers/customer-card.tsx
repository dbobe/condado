import { Customer } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

interface CustomerCardProps {
  customer: Customer | null;
}

export default function CustomerCard({ customer }: CustomerCardProps) {
  if (!customer) {
    return null;
  }
  return (
    <Card className="w-full">
      <CardContent className="py-4">
        <div className="flex flex-row gap-4 items-center">
          {/* <div className="flex aspect-square size-16 items-center justify-center"> */}
          <User className="size-16" />
          {/* </div> */}
          <div className="flex flex-col">
            <span className="text-lg font-semibold truncate">
              {customer.company}
            </span>
            <span className="text-sm text-muted-foreground truncate">
              {customer.name}
            </span>
            <span className="text-sm text-muted-foreground truncate">
              {customer.email}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
