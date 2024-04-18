import React from "react";

export default function Column({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-6 basis-1/2">{children}</div>;
}
