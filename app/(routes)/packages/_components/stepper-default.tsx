"use client";

import React from "react";
import { Stepper, Step } from "../../../_components/exports";
import { color } from "@material-tailwind/react/types/components/alert";

export function StepperDefault({
  steps,
  color,
}: {
  steps: string[];
  color: color;
}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  return (
    <Stepper
      activeStep={activeStep}
      isLastStep={(value) => setIsLastStep(value)}
      isFirstStep={(value) => setIsFirstStep(value)}
      lineClassName={`bg-${color}-light`}
      activeLineClassName={`bg-${color} max-w-full`}
    >
      {steps.map((step, i) => (
        <Step
          onClick={() => setActiveStep(i)}
          key={i}
          className={`bg-${color}-light font-medium`}
          activeClassName={`bg-${color}`}
          completedClassName={`bg-${color}`}
        >
          {i + 1}
          <p
            className={`font-medium absolute top-[4.5rem] w-36 text-center ${
              activeStep === i
                ? "text-black"
                : "hidden lg:inline lg:text-[gray]"
            }`}
          >
            {step}
          </p>
        </Step>
      ))}
    </Stepper>
  );
}
