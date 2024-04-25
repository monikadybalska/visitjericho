import React from "react";
import { cn } from "@/app/_lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {}

const AccommodationIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn("", className)}
      viewBox="0 -960 960 960"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M40-200v-600h80v400h320v-320h320q66 0 113 47t47 113v360h-80v-120H120v120H40Zm240-240q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm240 40h320v-160q0-33-23.5-56.5T760-640H520v240ZM280-520q17 0 28.5-11.5T320-560q0-17-11.5-28.5T280-600q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm0-40Zm240-80v240-240Z" />
    </svg>
  )
);

AccommodationIcon.displayName = "AccommodationIcon";
export default AccommodationIcon;
