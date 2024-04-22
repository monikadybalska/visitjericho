"use client";

import { useState, useContext, Context } from "react";
import { Stepper, Step } from "../../theme/exports";
import { TimelineContext, TimelineStepper } from "./steppers";

export default function OuterStepper() {
  const [isLastDay, setIsLastDay] = useState(false);
  const [isFirstDay, setIsFirstDay] = useState(false);

  const {
    days,
    color,
    activeDay,
    setActiveDay,
    setActiveStep,
    setCompletedSteps,
  } = useContext(TimelineContext as Context<TimelineStepper>);

  return (
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
            setCompletedSteps(new Set([]));
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
  );
}
