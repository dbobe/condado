"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  File,
  FileText,
  History,
  Mail,
  Pencil,
  Printer,
  RefreshCw,
  ShoppingCart,
  Trash,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function DocOrderCard() {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Card
      className={cn(
        "pt-4 hover:bg-accent",
        isSelected && "bg-primary text-primary-foreground"
      )}
      onClick={() => setIsSelected(!isSelected)}
    >
      <CardContent className="grid grid-cols-4 m-0 p-0 px-4 pb-2">
        <h6>Order # 848</h6>
        <h6>A.P Aluminum</h6>
        <h6>Balance: $1,783.77</h6>
        <h6>Total: $1,783.77</h6>
        <h6>Type: Delivery - Prod</h6>
        <p>Status: Quote</p>
        <p>Date Entered: Nov 18, 2024</p>
        <p>Required By: Dec 18, 2024</p>
        <p>User/Rep: FERNELY | condado</p>
        <p>
          PO #: <br />
          Last Modified: Jan 24, 2025
        </p>
      </CardContent>
      <CardFooter className="flex justify-end m-0 p-0 pb-4 px-4 gap-2 ">
        <Button
          variant={"outline"}
          size={"icon"}
          title="Open Document"
          aria-label="Open Document"
        >
          <Pencil />
        </Button>
        <Button
          variant={"outline"}
          size={"icon"}
          title="Order History"
          aria-label="Order History"
        >
          <History />
        </Button>
        <Button
          variant={"outline"}
          size={"icon"}
          title="Copy Document"
          aria-label="Copy Document"
        >
          <File />
        </Button>
        <Button
          variant={"outline"}
          size={"icon"}
          title="Create Alternative"
          aria-label="Create Alternative"
        >
          <FileText />
        </Button>
        <Button
          variant={"outline"}
          size={"icon"}
          title="Print Document"
          aria-label="Print Document"
        >
          <Printer />
        </Button>
        <Button
          variant={"outline"}
          size={"icon"}
          title="Place Order"
          aria-label="Place Order"
        >
          <ShoppingCart />
        </Button>
        <Button
          variant={"outline"}
          size={"icon"}
          title="Recalculate"
          aria-label="Recalculate"
        >
          <RefreshCw />
        </Button>
        <Button
          variant={"outline"}
          size={"icon"}
          title="Send by Email"
          aria-label="Send by Email"
        >
          <Mail />
        </Button>
        <Button
          variant={"outline"}
          size={"icon"}
          title="Delete Document"
          aria-label="Delete Document"
          className="text-destructive"
        >
          <Trash />
        </Button>
      </CardFooter>
    </Card>
  );
}
