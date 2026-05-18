import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl space-y-4 ${alignment}`}>
      <Badge className={align === "center" ? "mx-auto" : ""} variant="blue">
        {eyebrow}
      </Badge>
      <div className="space-y-3">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-7 text-muted-foreground md:text-lg">{description}</p>
      </div>
    </div>
  );
}
