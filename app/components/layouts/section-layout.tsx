import React from "react";

export default function SectionLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    children && (
      <div className="flex flex-col w-full h-full gap-6">{children}</div>
    )
  );
}