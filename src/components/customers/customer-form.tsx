"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { partnerSchema } from "@/lib/validations";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Partner } from "@prisma/client";

export default function CustomerForm({
  customer,
  disabled,
}: {
  customer: Partner | null;
  disabled: boolean;
}) {
  console.log("🚀 ~ customer:", customer);
  const form = useForm<z.infer<typeof partnerSchema>>({
    resolver: zodResolver(partnerSchema),
    defaultValues: {
      companyName: customer?.companyName,
      email: customer?.email || undefined,
      website: customer?.website || undefined,
      phone: customer?.phone || undefined,
      fax: customer?.fax || undefined,
      country: customer?.country || undefined,
      notes: customer?.notes || undefined,
      salesRepId: customer?.salesRepId || undefined,
      logoUrl: customer?.logoUrl || undefined,
      logoName: customer?.logoName || undefined,
      isBuilder: customer?.isBuilder || false,
    },
  });

  function onSubmit(values: z.infer<typeof partnerSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Company Name"
                  {...field}
                  disabled={disabled}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
