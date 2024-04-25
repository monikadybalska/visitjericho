import { Card } from "../../exports";
import CardHeader from "./card-header";
import CardBody from "./card-body-default";
import CardFooter from "./card-footer";

import { Providers } from "../../../_lib/providers";

import { Preview } from "@/app/_lib/types";
import { variant } from "@material-tailwind/react/types/components/card";
import { variant as buttonVariant } from "@material-tailwind/react/types/components/button";
import Link from "next/link";

export default function CardDefault({
  variant = "filled",
  title,
  description,
  slug,
  thumbnail,
  cta,
  color,
  fullwidth,
  buttonVariant = "text",
}: Omit<Preview, "priority"> & {
  fullwidth?: boolean;
  variant?: variant;
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
      <Card className="flex flex-1 pb-4" color={color} variant={variant}>
        <CardHeader thumbnail={thumbnail} fullwidth={fullwidth}></CardHeader>
        <CardBody title={title} description={description}></CardBody>
        <CardFooter
          slug={slug}
          cta={cta}
          buttonVariant={buttonVariant}
        ></CardFooter>
      </Card>
    </Providers>
  );
}
