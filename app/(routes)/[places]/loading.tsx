import FullwidthImage from "@/app/components/skeletons/fullwidth-image";
import React from "react";
import ParagraphSkeleton from "@/app/components/skeletons/paragraph";

export default function Loading({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full rounded-full flex flex-col gap-12">
      <FullwidthImage />
      <div className="flex w-full">
        <ParagraphSkeleton />
      </div>
      {children}
    </div>
  );
}
