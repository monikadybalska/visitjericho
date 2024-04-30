"use client";

import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

import { colors } from "@material-tailwind/react/types/generic";

export function CarouselContainer({
  color,
  children,
}: {
  color: colors;
  children: React.ReactNode;
}) {
  return (
    <Carousel opts={{ loop: true, align: "start" }}>
      <CarouselContent>{children}</CarouselContent>
      <CarouselPrevious color={color} />
      <CarouselNext color={color} />
    </Carousel>
  );
}
