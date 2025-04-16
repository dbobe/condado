import { Control } from "react-hook-form";
import { FormData } from "../multi-step-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Home } from "lucide-react";
type AddressFormProps = {
  control: Control<FormData>;
};
export default function AddressForm({ control }: AddressFormProps) {
  console.log({ control });

  return (
    <div className="space-y-4">
      <div>
        <div>
          <Home /> {}
        </div>
      </div>
      <FormField
        control={control}
        name="address.address1"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Address Line 1</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="address.address2"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Address Line 2</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
