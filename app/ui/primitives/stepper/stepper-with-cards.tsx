"use client";

import React from "react";
import { Stepper, Step } from "../../theme/exports";
import { color } from "@material-tailwind/react/types/components/alert";
import { ItineraryStep } from "@/lib/types";
import { cn } from "@/lib/utils";
import StepContent from "./step-content";

export function StepperWithCards({
  className,
  steps,
  color,
  activeStep,
  setActiveStep,
}: {
  className: any;
  steps: ItineraryStep[] | undefined;
  color: color;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  return (
    <>
      <Stepper
        className={cn(`flex-col h-[1000px]`, className)}
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
        lineClassName={`h-full w-0.5 bg-${color}-light`}
        activeLineClassName={`h-full w-0.5 bg-${color} hidden`}
        style={{ width: "0.125rem" }}
      >
        {steps &&
          steps
            .filter((step) => step.title)
            .map((step, j) => (
              <Step
                onClick={() => setActiveStep(j)}
                key={j}
                className={`bg-${color}-light`}
                activeClassName={`bg-${color}`}
                completedClassName={`bg-${color}`}
              >
                <StepContent step={step} />
              </Step>
            ))}
      </Stepper>
    </>
  );
}
