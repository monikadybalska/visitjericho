"use client";

import React, { useLayoutEffect, useRef, useContext, Context } from "react";
import { TimelineContext, TimelineStepper } from "./steppers";
import CardSmall from "@/app/_components/primitives/cards/card-small";
import { ItineraryStep } from "@/app/_lib/types";

export default function StepCard({
  step,
  index,
  dayIndex,
  completedSteps,
  setCompletedSteps,
  setActiveStep,
}: {
  step: ItineraryStep;
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (index === 1 && entry.isIntersecting) {
          setActiveDay(dayIndex);
        }
        if (entry.isIntersecting) {
          setCompletedSteps((curr) => new Set([...Array.from(curr), index]));
          setActiveStep(index);
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
      className={`absolute left-[6rem] min-w-[60vw] z-10 text-center transition-all duration-[3000ms] ${
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
