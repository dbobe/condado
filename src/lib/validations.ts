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
  companyName: z.string().min(2),
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
  firstName: z.string().min(2),
  lastName: z.string().min(2),
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
