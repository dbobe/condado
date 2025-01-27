import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ContactType } from "@prisma/client";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useParams } from "next/navigation";

export interface ContactFormData {
  partnerId: string;
  salutation?: string;
  firstName: string;
  lastName: string;
  position?: string;
  phone?: string;
  extension?: string;
  mobile?: string;
  fax?: string;
  email: string;
  defaultContact: boolean;
  notes?: string;
  type: ContactType;
}

export function ContactForm({
  onSubmit,
  onCancel,
}: {
  onSubmit: (data: ContactFormData) => void;
  onCancel: () => void;
}) {
  const params = useParams();
  const partnerId = params.partnerId as string;

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      partnerId,
      salutation: "",
      firstName: "",
      lastName: "",
      position: "",
      phone: "",
      extension: "",
      mobile: "",
      fax: "",
      email: "",
      defaultContact: false,
      type: ContactType.Customer,
      notes: "",
    },
  });

  function handleSubmit(values: z.infer<typeof contactSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 w-full"
      >
        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="salutation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Salutation</FormLabel>
                <FormControl>
                  <Select {...field} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Salutation" />
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
              <FormItem>
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
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
