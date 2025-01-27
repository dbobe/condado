import { cn } from "@/lib/utils";
import { Contact, Partner } from "@prisma/client";

interface SidelistCardProps {
  customer: Partner | Contact;
  isSelected: boolean;
}

export function SidelistCard({ customer, isSelected }: SidelistCardProps) {
  function isPartner(customer: Partner | Contact): customer is Partner {
    return (customer as Partner).companyName !== undefined;
  }

  function isContact(customer: Partner | Contact): customer is Contact {
    return (customer as Contact).firstName !== undefined;
  }

  if (isPartner(customer)) {
    return (
      <button
        className={cn(
          "w-full px-4 py-3 flex flex-col items-start justify-center hover:bg-accent transition-colors",
          isSelected && "bg-accent"
        )}
      >
        <div className="font-medium">{customer.companyName}</div>
        <div className="text-sm text-muted-foreground truncate">
          {customer.phone} • {customer.email}
        </div>
      </button>
    );
  }

  if (isContact(customer)) {
    return (
      <button
        className={cn(
          "w-full px-4 py-3 flex flex-col items-start justify-center hover:bg-accent transition-colors",
          isSelected && "bg-accent"
        )}
      >
        <div className="font-medium">
          {customer.firstName} {customer.lastName}
        </div>
        <div className="text-sm text-muted-foreground truncate">
          {customer.phone}
        </div>
      </button>
    );
  }
}
