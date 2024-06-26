"use client";

import React, { useState, createContext } from "react";
import OuterStepper from "./outer-stepper";
import InnerStepper from "./inner-stepper";
import { color } from "@material-tailwind/react/types/components/alert";
import { ItineraryStep } from "@/app/_lib/types";
import Day from "./day";

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
        <Day key={i} index={i} steps={day.filter((step) => step.title)} />
      ))}
    </TimelineContext.Provider>
  );
}
