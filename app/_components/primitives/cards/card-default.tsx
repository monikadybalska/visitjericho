import { Card as CardMT } from "../../exports";
import CardHeader from "./card-header";
import CardBody from "./card-body-default";
import CardFooter from "./card-footer";

import { Providers } from "../../../_lib/providers";

import { Card } from "@/app/_lib/types";
import { variant } from "@material-tailwind/react/types/components/card";
import { variant as buttonVariant } from "@material-tailwind/react/types/components/button";
import Link from "next/link";
import { colors } from "@material-tailwind/react/types/generic";
import React, { ReactElement } from "react";

export default function CardDefault({
  title,
  subheader,
  description,
  slug,
  thumbnail,
  cta,
  variant = "filled",
  color,
  fullwidth,
  buttonVariant = "text",
  onHomepage,
  children,
}: Partial<Card> & {
  subheader?: ReactElement;
  variant?: variant;
  color: colors;
  fullwidth?: boolean;
  buttonVariant?: buttonVariant;
  onHomepage?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <Providers>
      <CardMT
        className="flex flex-1 pb-4 relative"
        color={color}
        variant={variant}
      >
        {slug && (
          <Link
            href={slug || ""}
            aria-label="Click on the card to learn more"
            className="absolute w-full h-full z-50"
          ></Link>
        )}
        <CardHeader thumbnail={thumbnail} fullwidth={fullwidth}></CardHeader>
        <CardBody
          title={title}
          subheader={subheader}
          description={description}
          onHomepage={onHomepage}
        ></CardBody>
        {children}
      </CardMT>
    </Providers>
  );
}
