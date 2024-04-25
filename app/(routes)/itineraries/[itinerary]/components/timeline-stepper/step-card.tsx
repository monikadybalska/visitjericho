"use client";

import { useLayoutEffect, useRef, useContext, Context } from "react";
import { TimelineContext, TimelineStepper } from "./steppers";
import CardSmall from "@/app/components/primitives/cards/card-small";
import { ItineraryStep } from "@/lib/types";

export default function StepCard({
  step,
  index,
}: {
  step: ItineraryStep;
  index: number;
}) {
  const ref = useRef(null);

  const { color, setActiveStep, completedSteps, setCompletedSteps } =
    useContext(TimelineContext as Context<TimelineStepper>);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
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
      className={`min-w-[30vw] z-10 min-h-content absolute left-[6rem] text-center transition-all duration-[3000ms] ${
        completedSteps.has(index) ? "opacity-1 w-[60vw]" : "opacity-0 w-[30vw]"
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
