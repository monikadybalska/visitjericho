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

  return (
    <TimelineContext.Provider
      value={{
        days,
        color,
        activeDay,
        setActiveDay,
      }}
    >
      {days.length > 1 && <OuterStepper></OuterStepper>}
      {days.map((day, i) => (
        <section
          key={i}
          className="flex flex-col gap-10 pt-[180px]"
          id={`day${i + 1}`}
        >
          <InnerStepper index={i} steps={day.filter((step) => step.title)} />
        </section>
      ))}
    </TimelineContext.Provider>
  );
}
