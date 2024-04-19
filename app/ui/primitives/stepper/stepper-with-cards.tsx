"use client";

import React from "react";
import { Stepper, Step } from "../../theme/exports";
import { color } from "@material-tailwind/react/types/components/alert";
import { ItineraryStep } from "@/lib/types";
import CardSmall from "../cards/card-small";
import { cn } from "@/lib/utils";

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
              <div
                className={`min-w-[200px] w-[50vw] duration-300 transition-all absolute left-[6rem] text-center ${
                  activeStep === j ? "visible" : "hidden"
                }`}
                key={j}
              >
                <CardSmall
                  title={step.title}
                  color="green"
                  variant="outlined"
                  description={step.description}
                  slug={step.cta.url}
                  cta={step.cta.title}
                  buttonVariant="text"
                ></CardSmall>
              </div>
            </Step>
          ))}
    </Stepper>
  );
}
