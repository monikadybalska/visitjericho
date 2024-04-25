import { getPackagesPreviews } from "@/lib/api";

import {
  CarouselContainer,
  CarouselItem,
} from "../primitives/carousel/carousel";
import CardDefault from "../primitives/cards/card-default";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function PackagesPreviews() {
  const data = await getPackagesPreviews();

  return (
    <>
      {data && (
        <CarouselContainer color={data.color}>
          {data.packages.map((card, i) => (
            <CarouselItem
              key={i}
              className="basis-full lg:flex lg:basis-1/3 lg:items-end"
            >
              <CardDefault
                slug="/packages"
                title={card.title}
                description={card.description}
                cta={card.cta}
                color={data.color}
                key={i}
                buttonVariant={i === 1 ? "filled" : "outlined"}
              />
            </CarouselItem>
          ))}
        </CarouselContainer>
      )}
    </>
  );
}
