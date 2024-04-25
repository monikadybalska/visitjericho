import HeaderSkeleton from "@/app/components/skeletons/fullwidth-image";
import React from "react";
import ParagraphSkeleton from "@/app/components/skeletons/paragraph";

export default function Loading({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full rounded-full flex flex-col gap-12">
      <HeaderSkeleton />
      <div className="flex w-full gap-6">
        <ParagraphSkeleton />
        <ParagraphSkeleton />
      </div>
      {children}
    </div>
  );
}
