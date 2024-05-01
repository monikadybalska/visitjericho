"use client";

import { useEffect } from "react";
import SectionLayout from "@/app/_components/layouts/section-layout";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-between px-5 py-10 md:px-20">
      <div className="w-full max-w-screen-xl">
        <SectionLayout>
          <h1 className="font-serif">This page could not be found.</h1>
          <button onClick={() => reset()} className="text-start">
            Please try again.
          </button>
        </SectionLayout>
      </div>
    </div>
  );
}
