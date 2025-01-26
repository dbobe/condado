import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";
import DocOrderCard from "./doc-order-card";

interface DocTypeCardProps {
  title: string;
}

interface SectionCard {
  label: string;
  value: number;
  color: string;
}

interface SectionData {
  cards: SectionCard[];
}

type SectionDescriptions = {
  [K in "Quoted" | "Ready to Order" | "Ordered | Confirmed"]: SectionData;
};

const sectionDescriptions: SectionDescriptions = {
  Quoted: {
    cards: [
      {
        label: "Quoted",
        value: 19035845123123123.15,
        color: "bg-badge-high",
      },
      { label: "Project", value: 19035845123123123.15, color: "bg-badge-low" },
    ],
  },
  "Ready to Order": {
    cards: [
      { label: "Ordered", value: 19035845123123123.15, color: "bg-badge-high" },
    ],
  },
  "Ordered | Confirmed": {
    cards: [
      {
        label: "Confirmed",
        value: 19035845123123123.15,
        color: "bg-badge-high",
      },
      {
        label: "Balance",
        value: 19035845123123123.15,
        color: "bg-badge-critical",
      },
      {
        label: "Invoiced",
        value: 19035845123123123.15,
        color: "bg-badge-medium",
      },
    ],
  },
} as const;

export default function DocTypeCard({ title }: DocTypeCardProps) {
  const sectionData =
    sectionDescriptions[title as keyof typeof sectionDescriptions];

  return (
    <Card className="w-full h-full overflow-auto bg-sidebar">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex flex-row gap-2">
          {sectionData.cards.map((card) => (
            <div
              key={card.label}
              className={`flex flex-col px-6 py-2 items-center justify-center max-w-fit ${card.color} text-foreground rounded-md`}
            >
              <span className="text-lg font-bold">{card.label}</span>
              <span className="font-medium text-base">
                $
                {card.value.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-col gap-2 border-t border-border pt-4">
          <DocOrderCard />
          <DocOrderCard />
          <DocOrderCard />
        </div>
      </CardContent>
    </Card>
  );
}
