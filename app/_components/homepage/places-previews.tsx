import { getPlacesPreviews } from "@/app/_lib/api";

import {
  CarouselContainer,
  CarouselItem,
} from "../primitives/carousel/carousel";
import CardDefault from "../primitives/cards/card-default";
import { colors } from "@material-tailwind/react/types/generic";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function PlacesPreviews({
  slug,
  color,
}: {
  slug: string;
  color: colors;
}) {
  const places = await getPlacesPreviews(slug);

  return (
    places && (
      <CarouselContainer color={color}>
        {places.map((card, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
            <CardDefault
              slug={`/${slug}/${card.slug}`}
              title={card.title}
              thumbnail={card.thumbnail}
              description={card.description}
              cta={card.cta}
              color={color}
            />
          </CarouselItem>
        ))}
      </CarouselContainer>
    )
  );
}
