// import CustomerList from "@/components/CustomerList";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col size-full">
      <div className="px-2 w-full h-min bg-sidebar text-primary-foreground">
        <h1 className="text-lg">Document Management</h1>
      </div>
      <div className="flex flex-1 overflow-hidden">
        {/* <CustomerList /> */}
        <div className="flex-1 overflow-auto flex flex-col justify-between">
          {children}
        </div>
      </div>
    </div>
  );
}
