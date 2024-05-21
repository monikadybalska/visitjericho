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
import { createPortal } from "react-dom";
import { variant } from "@material-tailwind/react/types/components/card";

export default function PackagesCarousel({
  color,
  packages,
  variant,
}: {
  color: colors;
  packages: {
    title: string;
    price: string;
    description: string;
    cta: string;
  }[];
  variant: variant;
}) {
  const [choice, setChoice] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);

  function handleClick(text: string) {
    setChoice(text);
    setShowForm(true);
    document.body.style.overflow = "hidden";
  }

  function onClose() {
    setShowForm(false);
    document.body.style.overflow = "auto";
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
              variant={variant} // eslint-disable-line
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
      {showForm &&
        createPortal(
          <div
            className="fixed bg-[rgba(0,0,0,0.75)] z-50 top-0 bottom-0 right-0 left-0"
            onClick={onClose}
          >
            <Form
              onClose={onClose}
              choice={choice}
              options={packages.map((card) => card.title)}
            />
          </div>,
          document.body
        )}
    </>
  );
}
