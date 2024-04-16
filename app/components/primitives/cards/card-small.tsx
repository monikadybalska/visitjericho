import { Card } from "../../exports";
import CardSmallBody from "./card-small-body";

import { Providers } from "@/app/providers";
import { Preview } from "@/lib/types";
import { variant } from "@material-tailwind/react/types/components/card";
import { IconProps } from "../../icons/SightsIcon";

export default function CardSmall({
  variant,
  title,
  description,
  color,
  icon,
}: Omit<Preview, "priority"> & {
  variant?: variant;
  icon?: React.ForwardRefExoticComponent<
    Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}) {
  return (
    <Providers>
      <Card
        className="flex flex-1 pb-4 shadow-none hover:shadow-none"
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
