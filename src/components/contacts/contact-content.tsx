import { CheckIcon, XIcon, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Contact } from "@prisma/client";
import { ContactForm } from "./contact-form";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { contactSchema } from "@/lib/validations";
import { z } from "zod";

export default function ContactContent({ contacts }: { contacts: Contact[] }) {
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const handleOpenChange = (open: boolean) => {
    setShowContactForm(open);
    if (!open) {
      setSelectedContact(null);
    }
  };

  const handleAddContact = (data: z.infer<typeof contactSchema>) => {
    // TODO: Implement contact creation
    console.log("New contact data:", data);
    setSelectedContact(null);
    setShowContactForm(false);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Contacts</CardTitle>
        <Dialog open={showContactForm} onOpenChange={handleOpenChange}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Contact
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-screen-lg">
            <DialogHeader>
              <DialogTitle>
                {selectedContact ? "Edit Contact" : "Add Contact"}
              </DialogTitle>
              <DialogDescription>
                {selectedContact
                  ? "Update the contact information in the form below. Click save when you're done."
                  : "Fill out the form below to add a new contact to your list. All fields marked with * are required."}
              </DialogDescription>
            </DialogHeader>
            <ContactForm
              contact={selectedContact ?? undefined}
              onSubmit={handleAddContact}
              onCancel={() => handleOpenChange(false)}
            />
          </DialogContent>
        </Dialog>
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
                <TableHead>Primary Contact</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow
                  key={contact.id}
                  onClick={() => {
                    setSelectedContact(contact);
                    setShowContactForm(true);
                  }}
                  className="hover:bg-accent cursor-pointer"
                >
                  <TableCell>
                    {contact.firstName} {contact.lastName}
                  </TableCell>
                  <TableCell>{contact.position}</TableCell>
                  <TableCell>{contact.phone}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>
                    {contact.defaultContact ? (
                      <CheckIcon className="h-4 w-4" />
                    ) : (
                      <XIcon className="h-4 w-4" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
