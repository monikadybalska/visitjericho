"use client";

import { color } from "@material-tailwind/react/types/components/alert";
import CardDefault from "./card";
import {
  Carousel as CarouselDefault,
  IconButton,
} from "@material-tailwind/react";
import { Button } from "../exports";

import { cn } from "@/lib/utils";

export default function CarouselMedium({
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
          "rounded-xl overflow-y-visible",
          cards.length > 2 ? "pb-20" : "pb-4",
          className
        )}
        prevArrow={({ handlePrev }) => {
          return cards.length > 2 ? (
            <IconButton
              variant="text"
              size="lg"
              onClick={handlePrev}
              className={`!absolute bottom-0 right-[4.5rem] -translate-y-4 bg-${color}-light hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-${color} hover:bg-${color}-light rounded-md`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="black"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          ) : (
            <></>
          );
        }}
        nextArrow={({ handleNext }) => {
          return cards.length > 2 ? (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className={`!absolute bottom-0 right-3 -translate-y-4 bg-${color}-light hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-${color} hover:bg-${color}-light rounded-md`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="black"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          ) : (
            <></>
          );
        }}
        navigation={({ setActiveIndex, activeIndex, length }) => {
          <></>;
        }}
      >
        <div className="relative h-full w-full grid grid-cols-2 gap-4 pr-3">
          {cards
            .filter((card) => cards.indexOf(card) <= 1)
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
        {cards.length > 2 && (
          <div className="relative h-full w-full grid grid-cols-2 gap-4 pr-3">
            {cards
              .filter(
                (card) => cards.indexOf(card) >= 2 && cards.indexOf(card) <= 3
              )
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
        {cards.length > 4 && (
          <div className="relative h-full w-full grid grid-cols-2 gap-4 pr-3">
            {cards
              .filter(
                (card) => cards.indexOf(card) >= 4 && cards.indexOf(card) <= 5
              )
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
