import * as React from "react";
import { useCarousel } from "./carousel";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  const color = props.color;

  return (
    <>
      {canScrollPrev && (
        <button
          ref={ref}
          className={cn(
            `absolute h-8 w-8 rounded-md bg-${color}-light flex justify-center items-center hover:shadow-[7px_7px_0_0_rgba(0,0,0,1)] transition-shadow hover:shadow-${color}`,
            orientation === "horizontal"
              ? "right-12 -bottom-12 -translate-y-1/2"
              : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
            !canScrollPrev && "opacity-50 hover:shadow-none",
            className
          )}
          onClick={scrollPrev}
          {...props}
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </button>
      )}
    </>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

export const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  const color = props.color;

  return (
    <>
      {canScrollNext && (
        <button
          ref={ref}
          className={cn(
            `absolute h-8 w-8 rounded-md bg-${color}-light flex justify-center items-center hover:shadow-[7px_7px_0_0_rgba(0,0,0,1)] transition-shadow hover:shadow-${color}`,
            orientation === "horizontal"
              ? "right-0 -bottom-12 -translate-y-1/2"
              : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
            !canScrollNext && "opacity-50 hover:shadow-none",
            className
          )}
          onClick={scrollNext}
          {...props}
        >
          <ArrowRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </button>
      )}
    </>
  );
});
CarouselNext.displayName = "CarouselNext";
