import CustomerDetails from "@/components/CustomerDetails";
import { MultiStepForm } from "@/components/multi-step-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getCustomerById } from "@/lib/actions/customer";
import { HousePlus, Plus } from "lucide-react";

export default async function Customers({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const params = await searchParams;
  const customerId = params.id;
  const customer = customerId ? await getCustomerById(customerId) : null;
  return (
    <div className="flex flex-col flex-1 overflow-auto justify-between">
      {customer ? (
        <CustomerDetails customer={customer} />
      ) : (
        <div className="flex-1 p-4">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl font-bold mb-4">Customers</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg">
                  <Plus className="mr-2" />
                  Add Customer
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-screen-lg">
                <DialogHeader>
                  <DialogTitle>Add Customer</DialogTitle>
                </DialogHeader>
                <MultiStepForm />
              </DialogContent>
            </Dialog>
          </div>
          Select a customer to view details or start a quote.
        </div>
      )}
    </div>
  );
}
