import { Prisma } from "@prisma/client";
import { ChangeEvent } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

type CompanyFormProps = {
  data: Prisma.PartnerCreateInput;
  updateData: (data: { company: Prisma.PartnerCreateInput }) => void;
};

export function CompanyForm({ data, updateData }: CompanyFormProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateData({ company: { ...data, [name]: value } });
  };
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="companyName">Company Name</Label>
        <Input
          id="companyName"
          name="companyName"
          value={data.companyName}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
