import { cn } from "@/app/_lib/utils";

import Link from "next/link";

import { Card } from "../../exports";
import CardSmallBody from "./card-small-body";

import { Providers } from "../../../_lib/providers";

import { Card as CardType } from "@/app/_lib/types";
import { variant } from "@material-tailwind/react/types/components/card";
import { variant as buttonVariant } from "@material-tailwind/react/types/components/button";
import { IconProps } from "../../../../public/SightsIcon";
import { colors } from "@material-tailwind/react/types/generic";

export default function CardSmall({
  title,
  description,
  slug,
  icon,
  color,
  variant,
  className,
}: Partial<CardType> & {
  color?: colors;
  variant?: variant;
  icon?: React.ForwardRefExoticComponent<
    Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  className?: string;
}) {
  return (
    <Providers>
      {slug && (
        <Link
          href={slug}
          aria-label="Click on the card to learn more"
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
      </Card>
    </Providers>
  );
}
