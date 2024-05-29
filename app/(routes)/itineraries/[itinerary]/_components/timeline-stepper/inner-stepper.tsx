"use client";

import { useState, useEffect, useContext, Context, useMemo } from "react";
import { Stepper, Step } from "../../../../../_components/exports";
import { TimelineContext, TimelineStepper } from "./steppers";
import { ItineraryStep } from "@/app/_lib/types";
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
  const [lineHeight, setLineHeight] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(
    new Set([])
  );

  const { color, activeDay, setActiveDay } = useContext(
    TimelineContext as Context<TimelineStepper>
  );

  const activeLineHeight = useMemo(() => {
    return completedSteps.size === steps.length
      ? 200 * (completedSteps.size - 1)
      : 200 * completedSteps.size;
  }, [completedSteps, activeDay]);

  useEffect(() => {
    const lineHeightCalc = 200 * (steps.length - 1);
    setLineHeight(lineHeightCalc);
    if (activeDay > index) {
      setCompletedSteps(new Set(steps.map((step, i) => i + 1)));
    }
  }, [activeDay]);

  return (
    <Stepper
      className={`flex-col pl-6`}
      activeStep={activeStep}
      isLastStep={(value) => setIsLastStep(value)}
      isFirstStep={(value) => setIsFirstStep(value)}
      lineClassName={`h-[${lineHeight}px] w-0.5 bg-green-light`}
      activeLineClassName="hidden"
      style={{ width: "0.125rem", height: `${lineHeight}px` }}
    >
      {steps && (
        <>
          <div
            className={`absolute z-0 !w-0.5 bg-green transition-all duration-[3000ms]`}
            style={{ height: `${Math.round(activeLineHeight)}px` }}
          ></div>
          {steps.map((step, i) => (
            <Step
              key={i + 1}
              className={`bg-green-light transition-all duration-[3000ms] ${
                completedSteps.has(i + 1) && `bg-green`
              }`}
              activeClassName="bg-green"
              completedClassName="bg-green"
            >
              <StepCard
                step={step}
                steps={steps}
                index={i + 1}
                dayIndex={index}
                completedSteps={completedSteps}
                setCompletedSteps={setCompletedSteps}
                setActiveStep={setActiveStep}
              />
            </Step>
          ))}
        </>
      )}
    </Stepper>
  );
}
