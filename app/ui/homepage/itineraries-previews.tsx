import { getItinerariesPreviews } from "@/lib/api";

import {
  CarouselContainer,
  CarouselItem,
} from "../primitives/carousel/carousel";
import CardDefault from "../primitives/cards/card-default";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function ItinerariesPreviews() {
  const data = await getItinerariesPreviews();

  return (
    <>
      {data && (
        <CarouselContainer color={data.color}>
          {data.itineraries.map((card, i) => (
            <CarouselItem key={i} className="basis-full">
              <CardDefault
                slug={`/itineraries/${card.slug}`}
                title={card.title}
                thumbnail={card.thumbnail}
                description={card.description}
                cta={card.cta}
                color={data.color}
                key={i}
                fullwidth
              />
            </CarouselItem>
          ))}
        </CarouselContainer>
      )}
    </>
  );
}
