import { getSubcategoryPreview } from "@/lib/api";
import { Providers } from "@/app/providers";
import Link from "next/link";
import { Button } from "../../exports";
import React from "react";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function SubcategoryPreview({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const data = await getSubcategoryPreview(slug);

  return (
    <Providers>
      <section className="w-full pb-10 pt-14 max-w-screen-xl">
        {data && (
          <div className="w-full flex justify-between gap-3">
            <h3
              className={`font-serif text-2xl sm:text-[2rem] text-black basis-1/2`}
            >
              {data.title}
            </h3>
            <Link href={slug}>
              <Button
                variant="text"
                color="black"
                size="md"
                className="p-0 hover:underline hover:bg-transparent text-md text-right font-[400]"
                ripple={false}
              >
                {`${data.cta} →`}
              </Button>
            </Link>
          </div>
        )}
        {children}
      </section>
    </Providers>
  );
}
