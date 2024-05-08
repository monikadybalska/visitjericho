"use client";

import {
  CarouselContainer,
  CarouselItem,
} from "@/app/_components/primitives/carousel/carousel";
import CardDefault from "@/app/_components/primitives/cards/card-default";
import CardFooter from "@/app/_components/primitives/cards/card-footer";
import { Button } from "../../../_components/exports";
import { colors } from "@material-tailwind/react/types/generic";
import Form from "./form";
import React, { useState } from "react";

export default function PackagesCarousel({
  color,
  packages,
}: {
  color: colors;
  packages: {
    title: string;
    price: string;
    description: string;
    cta: string;
  }[];
}) {
  const [choice, setChoice] = useState<string | null>(null);

  function handleClick(text: string) {
    setChoice(text);
  }

  return (
    <>
      <CarouselContainer color={color}>
        {packages.map((card, i) => (
          <CarouselItem
            key={i}
            className="basis-full lg:flex lg:basis-1/3 lg:items-end"
          >
            <CardDefault
              title={card.title}
              description={card.description}
              color={color}
              // @ts-ignore: Incompatible module types
              variant="outlined" // eslint-disable-line
            >
              <CardFooter>
                <Button
                  variant={i === 1 ? "filled" : "outlined"}
                  size="md"
                  className="font-medium"
                  ripple={false}
                  color="orange"
                  name={card.title}
                  onClick={() => handleClick(card.title)}
                >
                  {card.cta}
                </Button>
              </CardFooter>
            </CardDefault>
          </CarouselItem>
        ))}
      </CarouselContainer>
      <Form choice={choice} options={packages.map((card) => card.title)} />
    </>
  );
}
