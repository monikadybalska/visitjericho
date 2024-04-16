import { Card } from "../../exports";
import CardHeader from "./card-header";
import CardBody from "./card-body-default";
import CardFooter from "./card-footer";

import { Providers } from "@/app/providers";
import { Preview } from "@/lib/types";
import { variant } from "@material-tailwind/react/types/components/card";
import { IconProps } from "../../icons/SightsIcon";

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
  buttonVariant?: "filled" | "outlined" | "text";
  icon?: React.ForwardRefExoticComponent<
    Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}) {
  return (
    <Providers>
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
