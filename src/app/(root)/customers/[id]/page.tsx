import CustomerDetails from "@/components/CustomerDetails";
import { getCustomerById } from "@/lib/actions/customer";
import { notFound } from "next/navigation";

interface companyNameProps {
  params: Promise<{ id: string }>;
}
export default async function Page({ params }: companyNameProps) {
  const customer = await getCustomerById((await params).id);

  if (!customer) {
    notFound();
  }

  return <CustomerDetails customer={customer} />;
}
