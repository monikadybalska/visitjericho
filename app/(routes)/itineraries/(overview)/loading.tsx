import HeaderSkeleton from "@/app/components/skeletons/fullwidth-image";
import React from "react";

export default function Loading({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full rounded-full flex flex-col gap-12">
      <HeaderSkeleton />
      <HeaderSkeleton />
      {children}
    </div>
  );
}
