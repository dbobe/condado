import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export default function StockBadge({
  className,
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("rounded-md px-2 py-1 text-xs", className)}>
      Stock Badge
    </div>
  );
}
