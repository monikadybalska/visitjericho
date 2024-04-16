import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../primitives/carousel/carousel";
import CardDefault from "../../primitives/cards/card-default";
import { getItinerariesPreviews } from "@/lib/api";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function CarouselItineraries() {
  const data = await getItinerariesPreviews();

  return (
    <Carousel opts={{ loop: true, align: "start" }}>
      <CarouselContent className="pr-20 md:pr-4">
        {data &&
          data.itineraries.map((card, i) => {
            return (
              <CarouselItem key={i} className="md:basis-full lg:basis-full">
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
            );
          })}
      </CarouselContent>
      {data && (
        <>
          <CarouselPrevious color={data.color} />
          <CarouselNext color={data.color} />
        </>
      )}
    </Carousel>
  );
}
