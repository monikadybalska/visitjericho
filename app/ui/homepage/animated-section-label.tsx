"use client";

import { color } from "@material-tailwind/react/types/components/alert";
import React, { useLayoutEffect, useRef } from "react";

const AnimatedComponent = ({ color }: { color: color }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      className={`bg-${color}-light pl-5 py-2 sm:pl-20 items-center flex w-0 rounded-r-md absolute top-0 h-8 transition-all duration-1000 ${
        isVisible ? "w-2/5 opacity-1" : "w-0 opacity-0"
      }`}
    ></div>
  );
};

export default AnimatedComponent;
