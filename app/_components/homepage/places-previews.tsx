import { getPlacesPreviews } from "@/app/_lib/api";

import {
  CarouselContainer,
  CarouselItem,
} from "../primitives/carousel/carousel";
import CardDefault from "../primitives/cards/card-default";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function PlacesPreviews({ slug }: { slug: string }) {
  const data = await getPlacesPreviews(slug);

  return (
    <>
      {data && (
        <CarouselContainer color={data.color}>
          {data.places.map((card, i) => (
            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
              <CardDefault
                slug={`/${slug}/${card.slug}`}
                title={card.title}
                thumbnail={card.thumbnail}
                description={card.description}
                cta={card.cta}
                color={data.color}
                key={i}
              />
            </CarouselItem>
          ))}
        </CarouselContainer>
      )}
    </>
  );
}
