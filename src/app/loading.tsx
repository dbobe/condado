import CWlogo from "@/components/CWlogo";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8">
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm">
        <div className="z-10 w-48 h-auto animate-pulse">
          <CWlogo className="text-primary" />
        </div>
        <Loader2 className="z-10 size-12 animate-spin text-muted-foreground" />
      </div>
    </div>
  );
}
