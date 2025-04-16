"use server";

import { Contact, Prisma } from "@prisma/client";
import { prisma } from "../../../prisma";
import { revalidatePath } from "next/cache";

export async function createContact(contact: Prisma.ContactCreateInput) {
  try {
    const newContact = await prisma.contact.create({
      data: contact,
    });
    revalidatePath("/customers/[id]");
    return newContact;
  } catch (error) {
    console.error("Error creating contact", error);
    throw new Error("Error creating contact");
  }
}

export async function updateContact(contact: Contact) {
  console.log("🚀 ~ updateContact ~ contact:", contact);
  try {
    const updatedContact = await prisma.contact.update({
      where: { id: contact.id },
      data: contact,
    });
    revalidatePath("/customers/[id]");
    return updatedContact;
  } catch (error) {
    console.error("Error updating contact", error);
    throw new Error("Error updating contact");
  }
}

export async function deleteContact(id: string) {
  try {
    await prisma.contact.delete({ where: { id } });
    revalidatePath("/customers/[id]");
  } catch (error) {
    console.error("Error deleting contact", error);
    throw new Error("Error deleting contact");
  }
}

export async function getContacts(partnerId: string) {
  try {
    return await prisma.contact.findMany({ where: { partnerId } });
  } catch (error) {
    console.error("Error fetching contacts", error);
    throw new Error("Error fetching contacts");
  }
}

export async function getContactById(id: string) {
  try {
    return await prisma.contact.findUnique({ where: { id } });
  } catch (error) {
    console.error("Error fetching contact", error);
    throw new Error("Error fetching contact");
  }
}

export async function getPrimaryContact(partnerId: string) {
  try {
    return await prisma.contact.findFirst({
      where: { partnerId, defaultContact: true },
    });
  } catch (error) {
    console.error("Error fetching default contact", error);
    throw new Error("Error fetching default contact");
  }
}
