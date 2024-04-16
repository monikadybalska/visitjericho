import { CardBody as CardBodyMT } from "../../exports";

import { IconProps } from "../../header-logo";

import { Providers } from "@/app/providers";
import { Preview } from "@/lib/types";
import React from "react";
import SightsIcon from "../../icons/SightsIcon";

export default function CardSmallBody({
  title,
  color,
  description,
  icon,
}: Pick<Preview, "title" | "description" | "color"> & {
  icon?: React.ForwardRefExoticComponent<
    Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}) {
  return (
    <Providers>
      <CardBodyMT className="p-0 flex flex-col">
        <div
          className={`min-w-48 p-4 shadow-none rounded-t-md rounded-b-none bg-${color}-light flex flex-row`}
        >
          {icon && (
            <SightsIcon
              className={
                color
                  ? `w-7 h-7 sm:w-8 sm:h-8 mr-2 text-${color} fill-current`
                  : `w-7 h-7 sm:w-8 sm:h-8 mr-2 color-black fill-current`
              }
            />
          )}
          {title && (
            <h3 className="font-serif text-xl sm:text-2xl text-black">
              {title}
            </h3>
          )}
        </div>
        {description && (
          <div
            dangerouslySetInnerHTML={{ __html: `${description}` }}
            className="font-light mt-4 mx-4"
          ></div>
        )}
      </CardBodyMT>
    </Providers>
  );
}
