import React from "react";

export default function ColumnsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-12 lg:gap-4 lg:flex-row">{children}</div>
  );
}
