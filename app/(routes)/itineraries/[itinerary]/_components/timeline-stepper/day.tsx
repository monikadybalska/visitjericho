import { ItineraryStep } from "@/app/_lib/types";
import InnerStepper from "./inner-stepper";
import { Context, useContext, useLayoutEffect, useRef } from "react";
import { TimelineContext, TimelineStepper } from "./steppers";

export default function Day({
  index,
  steps,
}: {
  index: number;
  steps: ItineraryStep[];
}) {
  const ref = useRef(null);

  const { setActiveDay } = useContext(
    TimelineContext as Context<TimelineStepper>
  );

  useLayoutEffect(() => {
    let observed = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveDay(index);
        }
      },
      { threshold: 0.6 }
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
    <section
      className="flex flex-col gap-10 pt-[180px]"
      id={`day${index + 1}`}
      ref={ref}
    >
      <InnerStepper index={index} steps={steps} />
    </section>
  );
}
