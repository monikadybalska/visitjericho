import { getPackagesPreviews } from "@/app/_lib/api";

import {
  CarouselContainer,
  CarouselItem,
} from "../primitives/carousel/carousel";
import CardDefault from "../primitives/cards/card-default";
import { colors } from "@material-tailwind/react/types/generic";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function PackagesPreviews({ color }: { color: colors }) {
  const packages = await getPackagesPreviews();

  return (
    <>
      {packages && (
        <CarouselContainer color={color}>
          {packages.map((card, i) => (
            <CarouselItem
              key={i}
              className="basis-full lg:flex lg:basis-1/3 lg:items-end"
            >
              <CardDefault
                slug="/packages"
                title={card.title}
                subheader={card.price}
                description={card.description}
                cta={card.cta}
                color={color}
                buttonVariant={i === 1 ? "filled" : "outlined"}
                onHomepage
              />
            </CarouselItem>
          ))}
        </CarouselContainer>
      )}
    </>
  );
}
