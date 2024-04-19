"use client";

import React, { useLayoutEffect, useRef } from "react";
import CardSmall from "../cards/card-small";

export default function StepContent({ step }: { step: any }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.8 }
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
      className={`min-w-[200px] min-h-content lg:absolute lg:left-[6rem] text-center transition-all duration-[3000ms] ${
        isVisible ? "opacity-1 w-[90vw] lg:w-[50vw]" : "opacity-0 lg:w-[30vw]"
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
