import { CardBody as CardBodyMT } from "../../exports";

import { Providers } from "../../../../lib/providers";
import { Preview } from "@/lib/types";
import React from "react";

export default function CardBody({
  title,
  description,
}: Pick<Preview, "title" | "description">) {
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
