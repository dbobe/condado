import CustomerDetails from "@/components/CustomerDetails";
import { getCustomerById } from "@/lib/actions/customer";

export default async function Customers({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const params = await searchParams;
  const customerId = params.id;
  const customer = customerId ? await getCustomerById(customerId) : null;
  return (
    <div className="flex-1 overflow-auto flex flex-col justify-between">
      <CustomerDetails customer={customer} />
    </div>
  );
}
