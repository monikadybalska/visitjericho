import Link from "next/link";
import { MenuItem, Typography } from "@material-tailwind/react";
import React from "react";

export default function NavListMenuItems({
  icon,
  title,
  slug,
}: {
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  slug: string;
}) {
  return (
    <Link href={`/${slug}`}>
      <MenuItem className="flex items-center gap-3 rounded-md hover:bg-orange-light focus:bg-orange-light active:bg-orange-light">
        <div className="flex items-center justify-center rounded-md bg-orange p-2 ">
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 text-white w-6",
            fill: "white",
          })}
        </div>
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-base font-bold"
          >
            {title}
          </Typography>
        </div>
      </MenuItem>
    </Link>
  );
}
