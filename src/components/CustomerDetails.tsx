"use client";

import { Customer } from "@/lib/data";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CustomerDetailsProps {
  customer: Customer | null;
}
export default function CustomerDetails({ customer }: CustomerDetailsProps) {
  const [activeTab, setActiveTab] = useState("details");

  if (!customer) {
    return <div className="p-4">Select a customer to view details</div>;
  }

  return (
    <div className="p-4 w-full">
      <h2 className="text-2xl font-bold mb-4">{customer.name}</h2>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full justify-start overflow-x-scroll">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
          <TabsTrigger value="address">Address</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <div>
            <p>
              <strong>Email:</strong> {customer.email}
            </p>
            <p>
              <strong>Phone:</strong> {customer.phone}
            </p>
            <p>
              <strong>Company:</strong> {customer.company}
            </p>
          </div>
        </TabsContent>
        <TabsContent value="contacts">
          <div>Contacts information would go here.</div>
        </TabsContent>
        <TabsContent value="address">
          <div>Address information would go here.</div>
        </TabsContent>
        <TabsContent value="documents">
          <div>Documents information would go here.</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
