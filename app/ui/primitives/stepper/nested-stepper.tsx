"use client";

import React from "react";
import { Stepper, Step } from "../../theme/exports";
import { StepperWithCards } from "./stepper-with-cards";
import StepContent from "./step-content";
import { color } from "@material-tailwind/react/types/components/alert";
import { ItineraryStep } from "@/lib/types";

export function NestedStepper({
  days,
  color,
}: {
  days: ItineraryStep[][];
  color: color;
}) {
  const [activeDay, setActiveDay] = React.useState(0);
  const [isLastDay, setIsLastDay] = React.useState(false);
  const [isFirstDay, setIsFirstDay] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <>
      {days.length > 1 && (
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
      )}
      {days.map((day, i) => (
        <>
          <StepperWithCards
            key={i}
            className={activeDay === i ? "hidden lg:flex" : "hidden"}
            steps={day}
            color="green"
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
          <div
            className={`flex w-full flex-col gap-12 ${
              activeDay === i ? "lg:hidden" : "hidden"
            }`}
          >
            {day &&
              day
                .filter((step) => step.title)
                .map((step, j) => (
                  <div className="w-full h-full flex justify-center" key={j}>
                    <StepContent key={j} step={step} />
                  </div>
                ))}
          </div>
        </>
      ))}
    </>
  );
}
