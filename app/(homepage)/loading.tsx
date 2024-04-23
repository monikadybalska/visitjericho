import React from "react";

export default function Loading({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col gap-12 justify-center">{children}</div>
  );
}
