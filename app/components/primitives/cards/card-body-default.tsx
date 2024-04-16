import { CardBody as CardBodyMT } from "../../exports";

import { IconProps } from "../../header-logo";

import { Providers } from "@/app/providers";
import { Preview } from "@/lib/types";
import React from "react";

export default function CardBody({
  title,
  description,
  icon,
}: Pick<Preview, "title" | "description"> & {
  icon?: React.ForwardRefExoticComponent<
    Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}) {
  return (
    <Providers>
      <CardBodyMT className="p-0 mt-4 mx-4 flex flex-col gap-2">
        {title && <h4 className="font-serif text-xl sm:text-2xl">{title}</h4>}
        {description && (
          <div
            dangerouslySetInnerHTML={{ __html: `${description}` }}
            className="font-light list-disc list-inside"
          ></div>
        )}
      </CardBodyMT>
    </Providers>
  );
}
