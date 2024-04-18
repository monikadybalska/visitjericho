"use client";

import React from "react";
import { Step as StepMT } from "../../exports";
import { color } from "@material-tailwind/react/types/components/alert";

export function Step({
  index,
  color,
  icon,
  children,
}: {
  index: number;
  color: color;
  icon: string;
  children: React.ReactNode;
}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  return (
    <>
      <StepMT
        onClick={() => setActiveStep(index)}
        className={`bg-${color}-light text-[gray]`}
        activeClassName={`bg-${color} text-black`}
        completedClassName={`bg-${color} text-black`}
      >
        {icon}
        <div className="absolute top-[4.5rem] w-36 text-center">{children}</div>
      </StepMT>
    </>
  );
}
