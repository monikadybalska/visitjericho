import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../primitives/carousel/carousel";
import CardDefault from "../../primitives/cards/card";
import { getPlacesPreviews } from "@/lib/api";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function CarouselPlaces({ slug }: { slug: string }) {
  const data = await getPlacesPreviews(slug);

  return (
    <Carousel opts={{ loop: true, align: "start" }}>
      <CarouselContent className="pr-20 md:pr-4">
        {data &&
          data.places.map((card, i) => {
            return (
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
