"use client";

import { Contact, Partner, PartnerAddress } from "@prisma/client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Pencil, Plus, Save, Trash2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ContactContent from "./contacts/contact-content";
import CustomerContent from "./customers/customer-content";

interface CustomerDetailsProps {
  customer:
    | (Partner & { contacts: Contact[]; partnerAddresses: PartnerAddress[] })
    | null;
}

export default function CustomerDetails({ customer }: CustomerDetailsProps) {
  const [activeTab, setActiveTab] = useState("details");
  const [isEditing, setIsEditing] = useState(false);
  // const [showContactForm, setShowContactForm] = useState(false);

  const isDisabled = !customer;

  // const handleAddContact = (data: ContactFormData) => {
  //   // TODO: Implement contact creation
  //   console.log("New contact data:", data);
  //   setShowContactForm(false);
  // };

  return (
    <div className="w-full h-full flex flex-col">
      {isDisabled ? (
        <div className="p-4 flex-1">
          Select a customer to view details or add a new customer.
        </div>
      ) : (
        <div className="flex-1 p-4 overflow-auto">
          <h2 className="text-2xl font-bold mb-4">{customer.companyName}</h2>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 w-full justify-start overflow-x-scroll">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="contacts">Contacts</TabsTrigger>
              <TabsTrigger value="address">Address</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            <TabsContent value="details">
              <CustomerContent customer={customer} />
            </TabsContent>
            <TabsContent value="contacts">
              <ContactContent contacts={customer?.contacts || []} />
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
      )}
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
            disabled={isDisabled}
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
            disabled={isDisabled}
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
