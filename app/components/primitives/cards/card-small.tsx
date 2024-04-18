import { Card } from "../../exports";
import CardSmallBody from "./card-small-body";
import CardFooter from "./card-footer";

import { Providers } from "@/app/providers";

import { Preview } from "@/lib/types";
import { variant } from "@material-tailwind/react/types/components/card";
import { variant as buttonVariant } from "@material-tailwind/react/types/components/button";
import { IconProps } from "../../icons/SightsIcon";

export default function CardSmall({
  variant,
  title,
  description,
  color,
  icon,
  slug,
  cta,
  buttonVariant,
}: Omit<Preview, "priority"> & {
  variant?: variant;
  icon?: React.ForwardRefExoticComponent<
    Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  buttonVariant?: buttonVariant;
}) {
  return (
    <Providers>
      <Card
        className="flex flex-1 pb-4 shadow-none hover:shadow-none items-start"
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
