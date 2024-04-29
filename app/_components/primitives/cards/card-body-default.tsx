import { CardBody as CardBodyMT } from "../../exports";

import { Providers } from "../../../_lib/providers";
import React from "react";

export default function CardBody({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Providers>
      <CardBodyMT className="p-0 mt-4 mx-4 flex flex-col gap-2">
        {title && <h4 className="font-serif text-xl sm:text-2xl">{title}</h4>}
        {description &&
          (description.includes("<li>") ? (
            <ul
              dangerouslySetInnerHTML={{ __html: `${description}` }}
              className="font-light list-disc list-inside"
            ></ul>
          ) : (
            <div
              dangerouslySetInnerHTML={{ __html: `${description}` }}
              className="font-light"
            ></div>
          ))}
      </CardBodyMT>
    </Providers>
  );
}
