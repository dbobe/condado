"use client";

import { Customer } from "@/lib/data";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Pencil, Plus, Save, Trash2, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomerDetailsProps {
  customer: Customer | null;
}
export default function CustomerDetails({ customer }: CustomerDetailsProps) {
  const [activeTab, setActiveTab] = useState("details");
  const [isEditing, setIsEditing] = useState(false);

  if (!customer) {
    return <div className="p-4">Select a customer to view details</div>;
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 p-4 overflow-auto">
        <h2 className="text-2xl font-bold mb-4">{customer.company}</h2>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 w-full justify-start overflow-x-scroll">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
            <TabsTrigger value="address">Address</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={customer.company}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={customer.name}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={customer.email}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={customer.phone}
                    disabled={!isEditing}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contacts</CardTitle>
              </CardHeader>
              <CardContent>
                <div>Contacts information would go here.</div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="address">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Address</CardTitle>
              </CardHeader>
              <CardContent>
                <div>Address information would go here.</div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div>Documents information would go here.</div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      {/* Footer with action buttons */}
      <div className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {}}
            disabled={isEditing}
            className="size-10"
            title="Add a new contact"
            aria-label="Add a new contact"
          >
            <Plus className="size-6" />
          </Button>
          <Button
            variant="outline"
            onClick={() => setIsEditing(!isEditing)}
            className={cn(
              "size-10",
              isEditing &&
                "bg-primary hover:bg-primary/80 text-primary-foreground hover:text-primary-foreground/80"
            )}
            title={isEditing ? "Cancel editing" : "Edit customer details"}
            aria-label={isEditing ? "Cancel editing" : "Edit customer details"}
          >
            {isEditing ? (
              <X className="size-6" />
            ) : (
              <Pencil className="size-6" />
            )}
          </Button>
          <Button
            variant="outline"
            onClick={() => setIsEditing(false)}
            disabled={!isEditing}
            className="size-10"
            title="Save customer details"
            aria-label="Save customer details"
          >
            <Save className="size-6" />
          </Button>
          <Button
            variant="outline"
            onClick={() => {}}
            className="size-10 text-destructive hover:text-destructive-foreground hover:bg-destructive"
            title="Delete customer"
            aria-label="Delete customer"
          >
            <Trash2 className="size-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
