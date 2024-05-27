"use client";

import React, { useState, createContext } from "react";
import OuterStepper from "./outer-stepper";
import InnerStepper from "./inner-stepper";
import InnerStepperMobile from "./inner-stepper-mobile";
import { color } from "@material-tailwind/react/types/components/alert";
import { ItineraryStep } from "@/app/_lib/types";

export interface TimelineStepper {
  days: ItineraryStep[][];
  color: color;
  activeDay: number;
  setActiveDay: React.Dispatch<React.SetStateAction<number>>;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  completedSteps: Set<number>;
  setCompletedSteps: React.Dispatch<React.SetStateAction<Set<number>>>;
}

export const TimelineContext = createContext<TimelineStepper | null>(null);

export default function TimelineStepper({
  days,
  color,
}: {
  days: ItineraryStep[][];
  color: color;
}) {
  const [activeDay, setActiveDay] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(
    new Set([])
  );

  return (
    <TimelineContext.Provider
      value={{
        days,
        color,
        activeDay,
        setActiveDay,
        activeStep,
        setActiveStep,
        completedSteps,
        setCompletedSteps,
      }}
    >
      {days.length > 1 && <OuterStepper></OuterStepper>}
      {days.map((day, i) => (
        <section
          key={i}
          className="flex flex-col gap-10 pt-[120px]"
          id={`day${i + 1}`}
        >
          <InnerStepper index={i} steps={day.filter((step) => step.title)} />
          {/* <InnerStepperMobile
            index={i}
            steps={day.filter((step) => step.title)}
          /> */}
        </section>
      ))}
    </TimelineContext.Provider>
  );
}
