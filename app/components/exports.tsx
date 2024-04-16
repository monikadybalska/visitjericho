"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Stepper,
  Step,
} from "@material-tailwind/react";

export interface ButtonStyleTypes {
  defaultProps: {
    variant: string;
    size: string;
    color: string;
    fullWidth: boolean;
    ripple: boolean;
    className: string;
  };
  valid: {
    variants: string[];
    sizes: string[];
    colors: string[];
  };
  styles: {
    base: {
      initial: object;
      fullWidth: object;
    };
    sizes: {
      sm: object;
      md: object;
      lg: object;
    };
    variants: {
      filled: object;
      gradient: object;
      text: object;
      icon: object;
    };
  };
}

import type { CardProps } from "@material-tailwind/react";

export {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Stepper,
  Step,
};
