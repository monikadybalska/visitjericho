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
    <Link
      href={`/${slug}`}
      tabIndex={0}
      role="menuitem"
      className="w-full pt-[9px] pb-2 px-3 text-start leading-tight cursor-pointer select-none transition-all hover:bg-opacity-80 focus:bg-opacity-80 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none flex items-center gap-3 rounded-md hover:bg-orange-light focus:bg-orange-light active:bg-orange-light"
    >
      <div className="flex items-center justify-center rounded-md bg-orange p-2 ">
        {React.createElement(icon, {
          strokeWidth: 2,
          className: "h-6 text-white w-6",
          fill: "white",
        })}
      </div>
      <p className="text-black flex items-center text-base font-bold normal-case">
        {title}
      </p>
    </Link>
  );
}
