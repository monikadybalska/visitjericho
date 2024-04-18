"use client";

import React from "react";
import { Stepper, Step, Typography } from "../../theme/exports";
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
      activeLineClassName={`bg-${color}`}
    >
      {steps.map((step, i) => (
        <Step
          onClick={() => setActiveStep(i)}
          key={i}
          className={`bg-${color}-light`}
          activeClassName={`bg-${color}`}
          completedClassName={`bg-${color}`}
        >
          {i + 1}
          <div className="absolute -bottom-[4.5rem] w-36 text-center">
            <Typography
              variant="h6"
              color={activeStep === i ? "black" : "gray"}
              className="font-medium"
            >
              {step}
            </Typography>
          </div>
        </Step>
      ))}
    </Stepper>
  );
}
