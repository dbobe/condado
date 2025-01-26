"use client";
import { cn } from "@/lib/utils";
import { HTMLAttributes, useState } from "react";
import { DateRange } from "react-day-picker";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format, subDays } from "date-fns";
import { Calendar } from "./ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function DateRangePicker({
  className,
  isDisabled,
}: HTMLAttributes<HTMLDivElement> & { isDisabled?: boolean }) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [selectedPeriod, setSelectedPeriod] = useState<string>();

  const handleSelectPeriod = (period: string) => {
    setSelectedPeriod(period);
    const days = parseInt(period);
    const startDate = subDays(new Date(), days);
    setDateRange({ from: startDate, to: new Date() });
  };

  const handleReset = () => {
    setDateRange(undefined);
    setSelectedPeriod(undefined);
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild disabled={isDisabled}>
          <Button
            id="date"
            variant="outline"
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !dateRange && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "LLL dd, y")} -{" "}
                  {format(dateRange.to, "LLL dd, y")}
                </>
              ) : (
                format(dateRange.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-sidebar" align="start">
          <Select onValueChange={handleSelectPeriod} value={selectedPeriod}>
            <SelectTrigger>
              <SelectValue placeholder="Select period or range" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="60">Last 60 days</SelectItem>
              <SelectItem value="90">Last 3 months</SelectItem>
              <SelectItem value="180">Last 6 months</SelectItem>
              <SelectItem value="270">Last 9 months</SelectItem>
              <SelectItem value="365">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={1}
          />
          <Button
            className="w-full items-center justify-center"
            onClick={handleReset}
          >
            Reset Selection
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
}
