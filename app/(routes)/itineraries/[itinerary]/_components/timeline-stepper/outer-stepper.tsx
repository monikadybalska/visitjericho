"use client";

import { useState, useContext, Context } from "react";
import { Stepper, Step } from "../../../../../_components/exports";
import { TimelineContext, TimelineStepper } from "./steppers";
import { cn } from "@/app/_lib/utils";
import Link from "next/link";

export default function OuterStepper({ className }: { className?: string }) {
  const [isLastDay, setIsLastDay] = useState(false);
  const [isFirstDay, setIsFirstDay] = useState(false);

  const { days, color, activeDay, setActiveDay } = useContext(
    TimelineContext as Context<TimelineStepper>
  );

  return (
    <div className="sticky top-0 z-20 h-[120px] bg-white">
      <Stepper
        activeStep={activeDay}
        isLastStep={(value) => setIsLastDay(value)}
        isFirstStep={(value) => setIsFirstDay(value)}
        lineClassName={`bg-${color}-light`}
        activeLineClassName={`bg-${color} max-w-full`}
        className={cn("", className)}
      >
        {days.map((day, i) => (
          <Step
            key={i}
            onClick={() => {
              setActiveDay(i);
            }}
            className={`bg-${color}-light text-[gray]`}
            activeClassName={`bg-${color} text-black`}
            completedClassName={`bg-${color} text-black`}
          >
            <Link
              key={i}
              href={`#day${i + 1}`}
              className="absolute w-full min-w-36 h-[120px] z-50 top-0"
            ></Link>
            <h3
              className={`absolute font-medium font-serif top-[4.5rem] w-36 text-center transition-all duration-1000
                  ${activeDay === i && "text-4xl text-green"}`}
            >{`Day ${i + 1}`}</h3>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
