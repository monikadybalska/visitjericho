"use client";

import React, { useLayoutEffect, useRef } from "react";
import CardSmall from "../cards/card-small";

export default function StepContent({
  step,
  index,
  setActiveStep,
  completedSteps,
  setCompletedSteps,
}: {
  step: any;
  index?: number;
  setActiveStep?: React.Dispatch<React.SetStateAction<number>>;
  completedSteps?: Set<number>;
  setCompletedSteps?: React.Dispatch<React.SetStateAction<Set<number>>>;
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCompletedSteps &&
            index &&
            setCompletedSteps((curr) => new Set([...Array.from(curr), index]));
          setIsVisible(true);
          index && setActiveStep && setActiveStep(index);
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
      className={`min-w-[30vw] z-10 min-h-content lg:absolute lg:left-[6rem] text-center transition-all duration-[3000ms] ${
        (index && completedSteps && completedSteps.has(index)) || isVisible
          ? "opacity-1 w-[90vw] lg:w-[60vw]"
          : "opacity-0 lg:w-[30vw]"
      }`}
    >
      <CardSmall
        title={step.title}
        color="green"
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
