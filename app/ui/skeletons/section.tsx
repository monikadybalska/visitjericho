import React from "react";

export default function SectionSkeleton({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="w-full flex mt-16 justify-center items-center">
      {children}
    </div>
  );
}
