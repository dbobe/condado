"use client";

import { getTotalPages, paginate } from "@/lib/utils";
import { Contact } from "@prisma/client";
import { useState } from "react";
import { SidelistCard } from "../sidelist-card";

interface ContactsListProps {
  contacts: Contact[];
}

export function ContactsList({ contacts }: ContactsListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = getTotalPages(contacts, itemsPerPage);
  const paginatedContacts = paginate(
    contacts,
    currentPage,
    itemsPerPage
  ) as Contact[];
  return (
    <div className="w-72 p-2 h-full bg-sidebar text-sidebar-foreground flex flex-col">
      <div className="flex flex-col flex-1 justify-between">
        <div className="flex-1 overflow-auto">
          <div className="divide-y overflow-hidden">
            {paginatedContacts.length === 0 ? (
              <div className="px-4 py-3 text-muted-foreground">
                No contacts found
              </div>
            ) : (
              paginatedContacts.map((contact) => (
                <SidelistCard key={contact.id} customer={contact} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
