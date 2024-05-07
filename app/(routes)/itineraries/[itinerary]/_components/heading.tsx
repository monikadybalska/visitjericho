import { Providers } from "../../../../_lib/providers";
import { Button } from "../../../../_components/exports";

import Link from "next/link";
import { ItineraryHeading } from "@/app/_lib/types";

export default async function Heading({
  slug,
  query,
}: {
  slug: string;
  query: (slug: string) => Promise<ItineraryHeading | null>;
}) {
  const heading = await query(slug);

  return (
    heading && (
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-serif">{heading.title}</h1>
        <div className="flex gap-2">
          {heading.numberOfDays === 1 ? (
            <p className="font-medium">
              <span className="font-bold text-lg">{heading.numberOfDays}</span>{" "}
              day
            </p>
          ) : (
            <p className="font-medium">
              <span className="font-bold text-lg">{heading.numberOfDays}</span>{" "}
              days
            </p>
          )}
          <p className="font-medium">
            <span className="font-bold text-lg">
              {heading.numberOfAttractions}
            </span>{" "}
            attractions
          </p>
        </div>
        {/* <Providers>
          <Link href={heading.cta.link}>
            <Button color="green">{heading.cta.text}</Button>
          </Link>
        </Providers> */}
      </div>
    )
  );
}
