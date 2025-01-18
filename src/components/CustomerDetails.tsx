"use client";

import { Customer } from "@/lib/data";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

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
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="company">Company</Label>
                <Input id="company" value={customer.company} disabled />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={customer.name} disabled />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" value={customer.email} disabled />
              </div>
              <div className="space-y-1">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" value={customer.phone} disabled />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="contacts">
          <Card>
            <CardHeader>
              <CardTitle>Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div>Contacts information would go here.</div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="address">
          <Card>
            <CardHeader>
              <CardTitle>Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div>Address information would go here.</div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div>Documents information would go here.</div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
