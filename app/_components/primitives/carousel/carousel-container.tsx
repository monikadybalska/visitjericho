"use client";

import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

import { colors } from "@material-tailwind/react/types/generic";

import { cn } from "@/app/_lib/utils";

export function CarouselContainer({
  color,
  children,
  className,
}: {
  color: colors;
  children: React.ReactNode[];
  className?: string;
}) {
  return (
    <>
      <Carousel
        opts={{ loop: true, align: "start" }}
        className={cn("lg:hidden", className)}
      >
        <CarouselContent className="pr-20 md:pr-4">
          {children?.length <= 3 ? [...children, ...children] : children}
        </CarouselContent>
        <CarouselPrevious color={color} />
        <CarouselNext color={color} />
      </Carousel>
      <Carousel
        opts={{ loop: true, align: "start" }}
        className={cn("hidden lg:block", className)}
      >
        <CarouselContent className="pr-4">
          {children?.length < 3 ? [...children, ...children] : children}
        </CarouselContent>
        <CarouselPrevious color={color} />
        <CarouselNext color={color} />
      </Carousel>
    </>
  );
}
