import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Contact, ContactType } from "@prisma/client";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useParams } from "next/navigation";
import { SaveIcon, XIcon } from "lucide-react";

export function ContactForm({
  contact,
  onSubmit,
  onCancel,
}: {
  contact?: Contact;
  onSubmit: (data: z.infer<typeof contactSchema>) => void;
  onCancel: () => void;
}) {
  const params = useParams();
  const partnerId = params.partnerId as string;

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      partnerId: contact?.partnerId ?? partnerId,
      salutation: contact?.salutation ?? "",
      firstName: contact?.firstName ?? "",
      lastName: contact?.lastName ?? "",
      position: contact?.position ?? "",
      phone: contact?.phone ?? "",
      extension: contact?.extension ?? "",
      mobile: contact?.mobile ?? "",
      fax: contact?.fax ?? "",
      email: contact?.email ?? "",
      defaultContact: contact?.defaultContact ?? false,
      type: contact?.type ?? ContactType.Customer,
      notes: contact?.notes ?? "",
    },
  });

  function handleSubmit(values: z.infer<typeof contactSchema>) {
    console.log(values);
    onSubmit(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 w-full"
      >
        <div className="flex flex-row gap-4">
          <FormField
            control={form.control}
            name="salutation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Salutation</FormLabel>
                <FormControl>
                  <Select {...field} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Salutation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Mr">Mr</SelectItem>
                      <SelectItem value="Ms">Ms</SelectItem>
                      <SelectItem value="Mrs">Mrs</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="defaultContact"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center pt-2 space-y-3">
                <FormLabel>Primary Contact</FormLabel>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="size-8"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row gap-4">
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Position</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Work Phone</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="extension"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Extension</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Mobile</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fax"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Fax</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row gap-4 justify-end pt-4">
          <Button type="submit">
            <SaveIcon className="mr-2" />
            Save
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            className="text-destructive border-destructive"
          >
            <XIcon className="mr-2" />
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}
