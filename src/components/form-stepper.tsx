import { cn } from "@/lib/utils";

type FormStepperProps = {
  currentStep: number;
};

export function FormStepper({ currentStep }: FormStepperProps) {
  const steps = ["Company", "Contact", "Address"];
  return (
    <div className="flex justify-between items-center mb-8">
      {steps.map((step, index) => (
        <div key={step} className="flex flex-col items-center">
          <div
            className={cn(
              "size-10 rounded-full flex items-center justify-center",
              currentStep === index + 1
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            )}
          >
            {index + 1}
          </div>
          <span className="text-sm mt-2">{step}</span>
        </div>
      ))}
    </div>
  );
}
