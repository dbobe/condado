import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Contact } from "@prisma/client";
import { ContactsList } from "./contacts-list";
import { ContactForm, ContactFormData } from "./contact-form";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export default function ContactContent({ contacts }: { contacts: Contact[] }) {
  const [showContactForm, setShowContactForm] = useState(false);
  const handleAddContact = (data: ContactFormData) => {
    // TODO: Implement contact creation
    console.log("New contact data:", data);
    setShowContactForm(false);
  };
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Contacts</CardTitle>
        <Button
          variant="outline"
          size="sm"
          onClick={() => console.log("Add Contact, open dialog")}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Contact
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row gap-4 w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Email</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow
                  key={contact.id}
                  onClick={() => console.log("Contact clicked")}
                >
                  <TableCell>
                    {contact.firstName} {contact.lastName}
                  </TableCell>
                  <TableCell>{contact.position}</TableCell>
                  <TableCell>{contact.phone}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
