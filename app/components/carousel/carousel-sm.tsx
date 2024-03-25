"use client";

import { color } from "@material-tailwind/react/types/components/alert";
import CardDefault from "./card";
import {
  Carousel as CarouselDefault,
  IconButton,
  Button,
} from "@material-tailwind/react";

import { cn } from "@/lib/utils";

export default function CarouselSmall({
  color,
  cards,
  className,
}: {
  color: color | undefined;
  cards: {
    title: string;
    image?: string;
    description: string;
  }[];
  className: string;
}) {
  return (
    <>
      <CarouselDefault
        className={cn(
          "rounded-xl overflow-y-visible overflow-x-visible pb-20",
          className
        )}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            size="lg"
            onClick={handlePrev}
            className={`w-10 h-10 !absolute bottom-0 right-[4rem] -translate-y-4 bg-${color}-light hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-${color} hover:bg-${color}-light rounded-md`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="black"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className={`w-10 h-10 !absolute bottom-0 right-3 -translate-y-4 bg-${color}-light hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-${color} hover:bg-${color}-light rounded-md`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="black"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => {
          return <></>;
        }}
      >
        <div className="relative h-full w-full grid grid-cols-1 pr-3 md:hidden">
          {cards
            .filter((card) => cards.indexOf(card) === 0)
            .map((card) => {
              return (
                <CardDefault
                  title={card.title}
                  image={card.image}
                  description={card.description}
                  color={color}
                  key={card.title}
                />
              );
            })}
        </div>
        {cards.length > 1 && (
          <div className="relative h-full w-full grid grid-cols-1 pr-3 md:hidden">
            {cards
              .filter((card) => cards.indexOf(card) === 1)
              .map((card) => {
                return (
                  <CardDefault
                    title={card.title}
                    image={card.image}
                    description={card.description}
                    color={color}
                    key={card.title}
                  />
                );
              })}
          </div>
        )}
        {cards.length > 2 && (
          <div className="relative h-full w-full grid grid-cols-1 pr-3 md:hidden">
            {cards
              .filter((card) => cards.indexOf(card) === 2)
              .map((card) => {
                return (
                  <CardDefault
                    title={card.title}
                    image={card.image}
                    description={card.description}
                    color={color}
                    key={card.title}
                  />
                );
              })}
          </div>
        )}
      </CarouselDefault>
    </>
  );
}
