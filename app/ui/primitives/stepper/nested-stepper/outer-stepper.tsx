"use client";

import React from "react";
import { Stepper, Step } from "../../../theme/exports";
import { color } from "@material-tailwind/react/types/components/alert";
import { Itinerary } from "@/lib/types";
import { InnerStepper } from "./inner-stepper";

export function NestedStepper({
  days,
  color,
}: {
  days: [
    Itinerary["timeline"]["day1"],
    Itinerary["timeline"]["day2"],
    Itinerary["timeline"]["day3"]
  ];
  color: color;
}) {
  const [activeDay, setActiveDay] = React.useState(0);
  const [isLastDay, setIsLastDay] = React.useState(false);
  const [isFirstDay, setIsFirstDay] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <>
      <Stepper
        activeStep={activeDay}
        isLastStep={(value) => setIsLastDay(value)}
        isFirstStep={(value) => setIsFirstDay(value)}
        lineClassName={`bg-${color}-light`}
        activeLineClassName={`bg-${color} max-w-full`}
      >
        {days.map((day, i) => (
          <Step
            onClick={() => {
              setActiveDay(i);
              setActiveStep(0);
            }}
            key={i}
            className={`bg-${color}-light text-[gray]`}
            activeClassName={`bg-${color} text-black`}
            completedClassName={`bg-${color} text-black`}
          >
            <div className="absolute top-[4.5rem] w-36 text-center">
              <h3 className={`font-medium font-serif`}>{`Day ${i + 1}`}</h3>
            </div>
          </Step>
        ))}
      </Stepper>
      {days.map((day, i) => (
        <InnerStepper
          key={i}
          className={`flex-col h-[1000px] ${
            activeDay === i ? "visible" : "hidden"
          }`}
          steps={day}
          color="green"
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      ))}
    </>
  );
}
