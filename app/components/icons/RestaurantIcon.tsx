import React from "react";
import { cn } from "@/lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {}

const RestaurantIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn("", className)}
      viewBox="0 -960 960 960"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z" />
    </svg>
  )
);

RestaurantIcon.displayName = "RestaurantIcon";
export default RestaurantIcon;
