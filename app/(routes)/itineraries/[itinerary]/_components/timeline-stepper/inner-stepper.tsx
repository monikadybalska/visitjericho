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
  const [heightPerStep, setHeightPerStep] = useState(0);

  const { color, activeDay, activeStep, completedSteps } = useContext(
    TimelineContext as Context<TimelineStepper>
  );

  return (
    steps &&
    steps.map((step, j) => (
      <StepCard
        key={j}
        stepsNumber={steps.length}
        step={step}
        index={j + 1}
        dayIndex={index}
      />
    ))
  );
}
