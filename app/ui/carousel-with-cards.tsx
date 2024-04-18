import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./primitives/carousel/carousel";

import CardDefault from "./primitives/cards/card-default";

import { colors } from "@material-tailwind/react/types/generic";
import { Preview } from "@/lib/types";
import { variant } from "@material-tailwind/react/types/components/button";

export default function CarouselWithCards({
  slug,
  color,
  fullwidth,
  cards,
  buttons = "text",
  ...props
}: {
  slug?: string;
  color: colors;
  fullwidth?: boolean;
  buttons?: variant;
  cards: Omit<Preview, "priority">[];
}) {
  return (
    <Carousel opts={{ loop: true, align: "start" }}>
      <CarouselContent className="pr-20 md:pr-4">
        {cards.map((card, i) => (
          <CarouselItem
            key={i}
            className={`lg:flex lg:items-end
              ${
                fullwidth
                  ? "md:basis-full lg:basis-full"
                  : "md:basis-1/2 lg:basis-1/3"
              }
            `}
          >
            <CardDefault
              slug={
                slug && card.slug
                  ? `/${slug}/${card.slug}`
                  : slug
                  ? `/${slug}`
                  : card.slug
                  ? `/${card.slug}`
                  : "/"
              }
              title={card.title}
              thumbnail={card.thumbnail}
              description={card.description}
              cta={card.cta}
              color={color}
              key={i}
              fullwidth
              buttonVariant={buttons}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious color={color} />
      <CarouselNext color={color} />
    </Carousel>
  );
}
