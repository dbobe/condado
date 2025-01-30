"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { FormStepper } from "./form-stepper";
import { CompanyForm } from "./customers/company-form";
import { z } from "zod";
import {
  contactSchema,
  partnerSchema,
  partnerAddressSchema,
} from "@/lib/validations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./ui/form";
import { Button } from "./ui/button";
import { ContactStepForm } from "./contacts/contact-step-form";
import { ArrowLeftIcon, ArrowRightIcon, SendHorizonal } from "lucide-react";

const formSchema = z.object({
  company: z.object({ ...partnerSchema.shape }),
  contact: z.object({ ...contactSchema.shape }),
  address: z.object({ ...partnerAddressSchema.shape }),
});

export type FormData = z.infer<typeof formSchema>;

const defaultFormData: FormData = {
  company: {
    companyName: "",
    email: undefined,
    website: undefined,
    phone: undefined,
    fax: undefined,
    country: undefined,
    notes: undefined,
    salesRepId: undefined,
    logoUrl: undefined,
    logoName: undefined,
    isBuilder: false,
  },
  contact: {
    salutation: undefined,
    firstName: "",
    lastName: "",
    position: undefined,
    phone: undefined,
    extension: undefined,
    mobile: undefined,
    fax: undefined,
    email: undefined,
    notes: undefined,
    defaultContact: false,
    type: "Customer", // Default contact type
  },
  address: {
    description: "",
    address1: "",
    address2: undefined,
    city: "",
    zip: "",
    stateId: undefined,
    countryId: undefined,
    isDefault: false,
    isJobAddress: false,
    notes: undefined,
    billTo: false,
    shipTo: false,
  },
};

export function MultiStepForm() {
  const [step, setStep] = useState(1);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultFormData,
    mode: "onChange",
  });

  const handleNext = async () => {
    const fields =
      step === 1
        ? [
            "company.companyName",
            "company.email",
            "company.website",
            "company.phone",
            "company.fax",
            "company.country",
            "company.notes",
            "company.salesRepId",
            "company.logoUrl",
            "company.logoName",
            "company.isBuilder",
          ]
        : step === 2
        ? [
            "contact.salutation",
            "contact.firstName",
            "contact.lastName",
            "contact.position",
            "contact.phone",
            "contact.extension",
            "contact.mobile",
            "contact.fax",
            "contact.email",
            "contact.notes",
            "contact.defaultContact",
            "contact.type",
          ]
        : [
            "address.description",
            "address.address1",
            "address.address2",
            "address.city",
            "address.zip",
            "address.stateId",
            "address.countryId",
            "address.isDefault",
            "address.isJobAddress",
            "address.notes",
            "address.billTo",
            "address.shipTo",
          ];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isStepValid = await form.trigger(fields as any);
    if (isStepValid) {
      setStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handlePrevious = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (data: FormData) => {
    console.log(data);
    // TODO: Implement form submission logic
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Card className="w-full mx-auto pt-8">
          {/* <CardHeader>
            <CardTitle>Company Registration</CardTitle>
          </CardHeader> */}
          <CardContent>
            <FormStepper currentStep={step} />
            {step === 1 && <CompanyForm control={form.control} />}
            {step === 2 && <ContactStepForm control={form.control} />}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevious}
              disabled={step === 1}
            >
              <ArrowLeftIcon className="mr-2" />
              Prev
            </Button>
            {step < 3 ? (
              <Button type="button" variant="outline" onClick={handleNext}>
                Next
                <ArrowRightIcon className="ml-2" />
              </Button>
            ) : (
              <Button type="submit">
                Submit
                <SendHorizonal className="ml-2" />
              </Button>
            )}
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
