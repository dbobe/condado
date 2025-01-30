"use client";

import { Contact, Partner, PartnerAddress } from "@prisma/client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactContent from "./contacts/contact-content";
import CustomerContent from "./customers/customer-content";
import { MultiStepForm } from "./multi-step-form";

interface CustomerDetailsProps {
  customer:
    | (Partner & { contacts: Contact[]; partnerAddresses: PartnerAddress[] })
    | null;
}

export default function CustomerDetails({ customer }: CustomerDetailsProps) {
  const [activeTab, setActiveTab] = useState("details");

  const isDisabled = !customer;

  return (
    <div className="w-full h-full flex flex-col">
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
    </div>
  );
}
