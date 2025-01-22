import CWlogo from "@/components/CWlogo";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8">
      <div className="w-48 h-auto animate-pulse">
        <CWlogo className="text-primary" />
      </div>
      <Loader2 className="size-12 animate-spin text-muted-foreground" />
    </div>
  );
}
