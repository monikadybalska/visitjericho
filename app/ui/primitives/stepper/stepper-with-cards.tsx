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
  activeDay,
  activeStep,
  setActiveStep,
  completedSteps,
  setCompletedSteps,
}: {
  className: any;
  steps: ItineraryStep[];
  color: color;
  activeDay: number;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  completedSteps: Set<number>;
  setCompletedSteps: React.Dispatch<React.SetStateAction<Set<number>>>;
}) {
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [heightPerStep, setHeightPerStep] = React.useState(0);

  const activeLineHeight = React.useMemo(() => {
    return completedSteps.size === steps.length
      ? heightPerStep * (completedSteps.size - 1)
      : heightPerStep * completedSteps.size;
  }, [completedSteps, activeDay]);

  React.useEffect(() => {
    const heightPerStepCalc = 1000 / (steps.length - 1);
    setHeightPerStep(heightPerStepCalc);
  }, [steps, activeDay]);

  return (
    <Stepper
      className={cn(`flex-col h-[1000px]`, className)}
      activeStep={activeStep}
      isLastStep={(value) => setIsLastStep(value)}
      isFirstStep={(value) => setIsFirstStep(value)}
      lineClassName={`h-full w-0.5 bg-${color}-light`}
      activeLineClassName="hidden"
      style={{ width: "0.125rem" }}
    >
      {steps && (
        <>
          <div
            className={`absolute z-0 !w-0.5 bg-green transition-all duration-[3000ms]`}
            style={{ height: `${Math.round(activeLineHeight)}px` }}
          ></div>
          {steps.map((step, j) => (
            <Step
              key={j + 1}
              className={`bg-${color}-light transition-all duration-[3000ms] ${
                completedSteps.has(j + 1) && `bg-${color}`
              }`}
              activeClassName={`bg-${color}`}
              completedClassName={`bg-${color}`}
            >
              <StepContent
                step={step}
                index={j + 1}
                setActiveStep={setActiveStep}
                completedSteps={completedSteps}
                setCompletedSteps={setCompletedSteps}
              />
            </Step>
          ))}
        </>
      )}
    </Stepper>
  );
}
