import { ChangeEvent } from "react";

type ContactStepFormProps = {
  data: Prisma.ContactCreateInput;
  updateData: (data: { contact: Prisma.ContactCreateInput }) => void;
};

export function ContactStepForm({ data, updateData }: ContactStepFormProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateData({ contact: { ...data, [name]: value } });
  };

  return <div>ContactStepForm</div>;
}
