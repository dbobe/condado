import { cn } from "@/lib/utils";
import { Partner } from "@prisma/client";

interface SidelistCardProps {
  customer: Partner;
  isSelected: boolean;
  onSelect: (id: string) => void;
}
export function SidelistCard({
  customer,
  isSelected,
  onSelect,
}: SidelistCardProps) {
  return (
    <button
      onClick={() => onSelect(customer.id)}
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
