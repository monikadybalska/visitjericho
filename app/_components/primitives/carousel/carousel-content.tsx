"use client";
import * as React from "react";
import { useCarousel } from "./carousel";
import { cn } from "@/app/_lib/utils";

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-x-clip pb-4 w-full">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-mr-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";
