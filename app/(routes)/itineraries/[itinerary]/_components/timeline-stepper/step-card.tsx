"use client";

import React, { useLayoutEffect, useRef, useContext, Context } from "react";
import { TimelineContext, TimelineStepper } from "./steppers";
import CardSmall from "@/app/_components/primitives/cards/card-small";
import { ItineraryStep } from "@/app/_lib/types";

export default function StepCard({
  step,
  steps,
  index,
  dayIndex,
  completedSteps,
  setCompletedSteps,
  setActiveStep,
}: {
  step: ItineraryStep;
  steps: ItineraryStep[];
  index: number;
  dayIndex: number;
  completedSteps: Set<number>;
  setCompletedSteps: React.Dispatch<React.SetStateAction<Set<number>>>;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const ref = useRef(null);

  const { color, activeDay, setActiveDay } = useContext(
    TimelineContext as Context<TimelineStepper>
  );

  useLayoutEffect(() => {
    let observed = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCompletedSteps((curr) => new Set([...Array.from(curr), index]));
          setActiveStep(index);
          observed = true;
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`absolute left-[6rem] min-w-[60vw] 2xl:min-w-[1000px] max-w-[1000px] z-10 text-center transition-all duration-[3000ms] ${
        completedSteps.has(index) ? "opacity-1" : "opacity-0"
      }`}
    >
      <CardSmall
        title={step.title}
        color={color}
        // @ts-ignore: Incompatible module types
        variant="outlined" // eslint-disable-line
        description={step.description}
        slug={step.cta.url}
        cta={step.cta.title}
        buttonVariant="text"
      ></CardSmall>
    </div>
  );
}
