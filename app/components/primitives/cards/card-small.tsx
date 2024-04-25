import { cn } from "@/lib/utils";

import Link from "next/link";

import { Card } from "../../exports";
import CardSmallBody from "./card-small-body";
import CardFooter from "./card-footer";

import { Providers } from "../../../../lib/providers";

import { Preview } from "@/lib/types";
import { variant } from "@material-tailwind/react/types/components/card";
import { variant as buttonVariant } from "@material-tailwind/react/types/components/button";
import { IconProps } from "../../../../public/SightsIcon";

export default function CardSmall({
  variant,
  title,
  description,
  color,
  icon,
  slug,
  cta,
  buttonVariant,
  className,
}: Omit<Preview, "priority"> & {
  variant?: variant;
  icon?: React.ForwardRefExoticComponent<
    Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  buttonVariant?: buttonVariant;
  className?: string;
}) {
  return (
    <Providers>
      {slug && (
        <Link
          href={slug || ""}
          className="lg:hidden absolute w-full h-full z-50"
        ></Link>
      )}
      <Card
        className={cn(
          "flex flex-1 pb-4 shadow-none hover:shadow-none items-start ",
          className
        )}
        color={color}
        variant={variant}
      >
        <CardSmallBody
          icon={icon}
          title={title}
          description={description}
          color={color}
        ></CardSmallBody>
        <CardFooter
          slug={slug}
          cta={cta}
          buttonVariant={buttonVariant}
        ></CardFooter>
      </Card>
    </Providers>
  );
}
