import CardDefault from "../../../../_components/primitives/cards/card-default";
import { colors } from "@material-tailwind/react/types/generic";
import {
  CarouselContainer,
  CarouselItem,
} from "../../../../_components/primitives/carousel/carousel";
import { getMoreItineraries } from "@/app/_lib/api";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function MoreItineraries({
  slug,
  color,
}: {
  slug: string;
  color: colors;
}) {
  const cards = await getMoreItineraries(slug);

  return (
    cards && (
      <>
        <h2 className="font-serif">See all itineraries</h2>
        <CarouselContainer color={color}>
          {cards.map((card, i) => (
            <CarouselItem key={i} className="md:basis-full lg:basis-full">
              <CardDefault
                slug={card.slug}
                thumbnail={card.thumbnail}
                title={card.title}
                description={card.description}
                cta={card.cta}
                color={color}
                fullwidth={true}
              />
            </CarouselItem>
          ))}
        </CarouselContainer>
      </>
    )
  );
}
