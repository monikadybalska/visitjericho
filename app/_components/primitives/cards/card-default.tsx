import { Card as CardMT } from "../../exports";
import CardHeader from "./card-header";
import CardBody from "./card-body-default";
import { cn } from "@/app/_lib/utils";

import { Providers } from "../../../_lib/providers";

import { Card } from "@/app/_lib/types";
import { variant } from "@material-tailwind/react/types/components/card";
import { variant as buttonVariant } from "@material-tailwind/react/types/components/button";
import Link from "next/link";
import { colors } from "@material-tailwind/react/types/generic";
import React, { ReactElement } from "react";

export default function CardDefault({
  className,
  title,
  subheader,
  description,
  slug,
  thumbnail,
  variant = "filled",
  color,
  fullwidth,
  onHomepage,
  children,
}: Partial<Card> & {
  className?: string;
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
        className={cn("flex flex-1 pb-4 relative", className)}
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
