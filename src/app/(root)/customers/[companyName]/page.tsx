import CustomerDetails from "@/components/CustomerDetails";
import { customers } from "@/lib/data";

interface companyNameProps {
  params: { companyName: string };
}
export default async function Page({ params }: companyNameProps) {
  const { companyName } = await params;

  const company = customers.find(
    (customer) => customer.company === decodeURI(companyName)
  );

  if (!company) {
    return <div>Company not found</div>;
  }

  return <CustomerDetails customer={company} />;
}
