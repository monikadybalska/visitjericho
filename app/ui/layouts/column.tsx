import React from "react";

export default function Column({ children }: { children?: React.ReactNode }) {
  return (
    children && <div className="flex flex-col gap-4 w-full">{children}</div>
  );
}
