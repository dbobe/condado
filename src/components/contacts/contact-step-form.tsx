import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { PhoneInput } from "@/components/phone-input";
import { Control } from "react-hook-form";
import { FormData } from "../multi-step-form";

type ContactStepFormProps = {
  control: Control<FormData>;
};

export function ContactStepForm({ control }: ContactStepFormProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <FormField
          control={control}
          name="contact.salutation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Salutation</FormLabel>
              <FormControl>
                <Select {...field} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Salutation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Mr">Mr</SelectItem>
                    <SelectItem value="Ms">Ms</SelectItem>
                    <SelectItem value="Mrs">Mrs</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="contact.firstName"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="contact.lastName"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="contact.defaultContact"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center pt-2 space-y-3">
              <FormLabel>Primary Contact</FormLabel>
              <FormControl>
                <Checkbox
                  checked={true}
                  onCheckedChange={() => {}}
                  className="size-8"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex flex-row gap-4">
        <FormField
          control={control}
          name="contact.position"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Position</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="contact.email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex flex-row gap-4">
        <FormField
          control={control}
          name="contact.phone"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Work Phone</FormLabel>
              <FormControl>
                <PhoneInput
                  {...field}
                  defaultCountry="US"
                  international={false}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="contact.extension"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Extension</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="contact.mobile"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Mobile</FormLabel>
              <FormControl>
                <PhoneInput
                  {...field}
                  defaultCountry="US"
                  international={false}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="contact.fax"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Fax</FormLabel>
              <FormControl>
                <PhoneInput
                  {...field}
                  defaultCountry="US"
                  international={false}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
