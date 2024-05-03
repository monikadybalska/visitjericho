import { CardBody as CardBodyMT } from "../../exports";

import { Providers } from "../../../_lib/providers";
import React, { ReactElement } from "react";

export default function CardBody({
  title,
  subheader,
  description,
  onHomepage,
}: {
  title?: string;
  subheader?: ReactElement;
  description?: string;
  onHomepage?: boolean;
}) {
  return (
    <Providers>
      <CardBodyMT className="p-0 mt-4 mx-4 flex flex-col gap-2">
        {title &&
          (onHomepage ? (
            <h4 className="font-serif text-xl sm:text-2xl">{title}</h4>
          ) : (
            <h3 className="font-serif">{title}</h3>
          ))}
        {subheader}
        {description && (
          <div
            dangerouslySetInnerHTML={{ __html: `${description}` }}
            className="font-light"
          ></div>
        )}
      </CardBodyMT>
    </Providers>
  );
}
