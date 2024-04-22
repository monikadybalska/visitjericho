"use client";

import { useContext, Context } from "react";
import { TimelineContext, TimelineStepper } from "./timeline-stepper";
import { ItineraryStep } from "@/lib/types";
import CardSmall from "../../primitives/cards/card-small";

export default function InnerStepperMobile({
  index,
  steps,
}: {
  index: number;
  steps: ItineraryStep[];
}) {
  const { color, activeDay } = useContext(
    TimelineContext as Context<TimelineStepper>
  );

  return (
    <div
      className={`flex w-full flex-col gap-12 ${
        activeDay === index ? "lg:hidden" : "hidden"
      }`}
    >
      {steps
        .filter((step) => step.title)
        .map((step, j) => (
          <div className="w-full h-full flex justify-center" key={j}>
            <CardSmall
              title={step.title}
              color={color}
              // @ts-ignore: Incompatible module types
              variant="outlined" // eslint-disable-line
              description={step.description}
              slug={step.cta.url}
              cta={step.cta.title}
              buttonVariant="text"
            ></CardSmall>
          </div>
        ))}
    </div>
  );
}
