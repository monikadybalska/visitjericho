import { Button } from "../exports";
import { Providers } from "@/app/providers";
import Link from "next/link";

export default function ItineraryPageHeading({
  title,
  days,
  attractions,
  cta,
}: {
  title: string;
  days: number;
  attractions: string;
  cta: {
    text: string;
    link: string;
  };
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="font-serif">{title}</h1>
      <div className="flex gap-2">
        <p className="font-medium">
          <span className="font-bold text-lg">{days}</span> days
        </p>
        <p className="font-medium">
          <span className="font-bold text-lg">{attractions}</span> attractions
        </p>
      </div>
      <Providers>
        <Link href={cta.link}>
          <Button color="green">{cta.text}</Button>
        </Link>
      </Providers>
    </div>
  );
}
