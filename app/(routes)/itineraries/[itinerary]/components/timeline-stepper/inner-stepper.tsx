"use client";

import { useState, useEffect, useContext, Context, useMemo } from "react";
import { Stepper, Step } from "../../../../../components/exports";
import { TimelineContext, TimelineStepper } from "./steppers";
import { ItineraryStep } from "@/lib/types";
import StepCard from "./step-card";

export default function InnerStepper({
  index,
  steps,
}: {
  index: number;
  steps: ItineraryStep[];
}) {
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [heightPerStep, setHeightPerStep] = useState(0);

  const { color, activeDay, activeStep, completedSteps } = useContext(
    TimelineContext as Context<TimelineStepper>
  );

  const activeLineHeight = useMemo(() => {
    return completedSteps.size === steps.length
      ? heightPerStep * (completedSteps.size - 1)
      : heightPerStep * completedSteps.size;
  }, [completedSteps, activeDay]);

  useEffect(() => {
    const heightPerStepCalc = 1000 / (steps.length - 1);
    setHeightPerStep(heightPerStepCalc);
  }, [steps, activeDay]);

  return (
    <Stepper
      className={`flex-col h-[1000px] ${
        activeDay === index ? "hidden lg:flex" : "hidden"
      }`}
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
              <StepCard step={step} index={j + 1} />
            </Step>
          ))}
        </>
      )}
    </Stepper>
  );
}
