import { CardBody as CardBodyMT } from "../../exports";
import SightsIcon from "../../../../public/SightsIcon";

import { Providers } from "../../../_lib/providers";

import { IconProps } from "../../../../public/logo";
import { colors } from "@material-tailwind/react/types/generic";

import React from "react";

export default function CardSmallBody({
  title,
  description,
  icon,
  color,
}: {
  title?: string;
  description?: string;
  color?: colors;
  icon?: React.ForwardRefExoticComponent<
    Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}) {
  return (
    <Providers>
      <CardBodyMT className="p-0 flex flex-col w-full">
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
            className="font-light mt-4 mx-4 text-left"
          ></div>
        )}
      </CardBodyMT>
    </Providers>
  );
}
