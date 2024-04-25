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

export default function CardDefault({
  title,
  description,
  slug,
  thumbnail,
  cta,
  variant = "filled",
  color,
  fullwidth,
  buttonVariant = "text",
}: Partial<Card> & {
  variant?: variant;
  color: colors;
  fullwidth?: boolean;
  buttonVariant?: buttonVariant;
}) {
  return (
    <Providers>
      {slug && (
        <Link
          href={slug || ""}
          className="lg:hidden absolute w-full h-full z-50"
        ></Link>
      )}
      <CardMT className="flex flex-1 pb-4" color={color} variant={variant}>
        <CardHeader thumbnail={thumbnail} fullwidth={fullwidth}></CardHeader>
        <CardBody title={title} description={description}></CardBody>
        {slug && cta && (
          <CardFooter
            slug={slug}
            cta={cta}
            buttonVariant={buttonVariant}
          ></CardFooter>
        )}
      </CardMT>
    </Providers>
  );
}
