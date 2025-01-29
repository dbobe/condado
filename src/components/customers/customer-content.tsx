import { Partner } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import CustomerForm from "./customer-form";
import { Button } from "../ui/button";
import { Pencil, Save, X } from "lucide-react";
import { useState } from "react";

export default function CustomerContent({ customer }: { customer: Partner }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Details</CardTitle>
        <div className="flex flex-row gap-2">
          <Button size={"sm"} className={isEditing ? "" : "hidden"}>
            <Save className="size-4 mr-2" />
            Save
          </Button>
          <Button
            variant={"outline"}
            size={"sm"}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? (
              <span className="flex flex-row items-center justify-center text-destructive">
                <X className="size-4 mr-2" />
                Cancel
              </span>
            ) : (
              <>
                <Pencil className="size-4 mr-2" />
                Edit
              </>
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <CustomerForm customer={customer} disabled={!isEditing} />
      </CardContent>
    </Card>
  );
}
