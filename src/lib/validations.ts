import { ContactType } from "@prisma/client";
import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const signUpSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

export const partnerSchema = z.object({
  companyName: z
    .string()
    .min(2, { message: "Company name must be at least 2 characters" }),
  email: z.string().email().optional(),
  website: z.string().url().optional(),
  phone: z.string().optional(),
  fax: z.string().optional(),
  country: z.string().optional(),
  notes: z.string().optional(),
  salesRepId: z.string().optional(),
  logoUrl: z.string().optional(),
  logoName: z.string().optional(),
  isBuilder: z.boolean().optional(),
});

export const contactSchema = z.object({
  salutation: z.string().optional(),
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  position: z.string().optional(),
  phone: z.string().optional(),
  extension: z.string().optional(),
  mobile: z.string().optional(),
  fax: z.string().optional(),
  email: z.string().email().optional(),
  notes: z.string().optional(),
  defaultContact: z.boolean().optional(),
  type: z.nativeEnum(ContactType),
});

export const partnerAddressSchema = z.object({
  description: z
    .string()
    .min(2, { message: "Description must be at least 2 characters" }),
  address1: z
    .string()
    .min(2, { message: "Address must be at least 2 characters" }),
  address2: z.string().optional(),
  city: z.string().min(2, { message: "City must be at least 2 characters" }),
  zip: z.string().min(5, { message: "Zip must be at least 5 characters" }),
  stateId: z.number().optional(),
  countryId: z.string().optional(),
  isDefault: z.boolean().optional(),

  isJobAddress: z.boolean().optional(),
  notes: z.string().optional(),
  billTo: z.boolean().optional(),
  shipTo: z.boolean().optional(),
});
