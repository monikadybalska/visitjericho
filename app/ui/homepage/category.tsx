import { getCategoryPreview } from "@/lib/api";
import React from "react";
import AnimatedComponent from "./animated-section-label";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function CategoryPreview({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const data = await getCategoryPreview(slug);
  return (
    <section className="relative flex w-full justify-center flex-col mt-16">
      {data ? (
        <>
          <AnimatedComponent color={data.color} />
          <div className="flex flex-col w-full items-center px-5 md:px-20 z-10">
            <h2 className="uppercase flex max-w-screen-xl w-full text-base font-medium py-1">
              {data.name}
            </h2>
            {children}
          </div>
        </>
      ) : (
        <div>No data found</div>
      )}
    </section>
  );
}
