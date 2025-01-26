import CustomerDetails from "@/components/CustomerDetails";
import { getCustomerById } from "@/lib/actions/customer";
import { notFound } from "next/navigation";

interface companyNameProps {
  params: { id: string };
}
export default async function Page({ params }: companyNameProps) {
  const customer = await getCustomerById(params.id);
  console.log("🚀 ~ Page ~ customer:", customer);

  if (!customer) {
    notFound();
  }

  return <CustomerDetails customer={customer} />;
}
