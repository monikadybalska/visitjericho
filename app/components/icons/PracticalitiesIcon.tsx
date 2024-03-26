import React from "react";
import { cn } from "@/lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {}

const PracticalitiesIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn("", className)}
      viewBox="0 -960 960 960"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M160-280v80h640v-80H160Zm120-440v-80q0-33 23.5-56.5T360-880h240q33 0 56.5 23.5T680-800v80h120q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h120ZM160-400h640v-240H680v80h-80v-80H360v80h-80v-80H160v240Zm200-320h240v-80H360v80ZM160-200v-440 80-80 80-80 440Z" />
    </svg>
  )
);

PracticalitiesIcon.displayName = "PracticalitiesIcon";
export default PracticalitiesIcon;
