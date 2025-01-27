import { Partner } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import CustomerForm from "./customer-form";

export default function CustomerContent({ customer }: { customer: Partner }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <CustomerForm customer={customer} />
      </CardContent>
    </Card>
  );
}
