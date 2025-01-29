"use client";

import { ContactType, Prisma } from "@prisma/client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FormStepper } from "./form-stepper";
import CustomerForm from "./customers/customer-form";
import { CompanyForm } from "./customers/company-form";
import { ContactForm } from "./contacts/contact-form";

type FormData = {
  company: Prisma.PartnerCreateInput;
  contact: Prisma.ContactCreateInput;
  address: Prisma.PartnerAddressCreateInput;
};

const initialData: FormData = {
  company: {
    companyName: "",
    email: null,
    website: null,
    phone: null,
    fax: null,
    country: null,
    notes: null,
    isActive: true,
    isBuilder: false,
    logoUrl: null,
    logoName: null,
    company: { connect: { id: "" } }, // Required relation
    contacts: undefined,
    partnerAddresses: undefined,
    salesRep: undefined,
  },
  contact: {
    firstName: "",
    lastName: "",
    email: "", // Required field
    type: "Customer" as ContactType, // Required enum field
    salutation: null,
    position: null,
    phone: null,
    extension: null,
    mobile: null,
    fax: null,
    defaultContact: false,
    notes: null,
    isDeleted: false,
    deletedById: null,
    deletedAt: null,
  },
  address: {
    description: "",
    address1: "",
    address2: null,
    city: "",
    zip: "",
    stateId: null,
    countryId: "", // Required
    isDefault: false,
    notes: null,
    billTo: false,
    shipTo: false,
    isDeleted: false,
    isJobAddress: false,
  },
};

export function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialData);

  const updateFormData = (stepData: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
  };

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrevious = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    console.log(formData);
    // TODO: Implement form submission logic
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Company Registration</CardTitle>
      </CardHeader>
      <CardContent>
        <FormStepper currentStep={step} />
        {step === 1 && (
          <CompanyForm data={formData.company} updateData={updateFormData} />
        )}
        {step === 2 && (<ContactForm />
      </CardContent>
    </Card>
  );
}
