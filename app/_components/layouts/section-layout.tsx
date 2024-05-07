import React from "react";

export default function SectionLayout({
  children,
  id,
}: {
  children?: React.ReactNode;
  id?: string;
}) {
  return (
    children && (
      <section className="flex flex-col w-full h-full gap-6" id={id}>
        {children}
      </section>
    )
  );
}
