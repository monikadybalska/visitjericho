import { getItinerariesPreviews } from "@/app/_lib/api";

import {
  CarouselContainer,
  CarouselItem,
} from "../primitives/carousel/carousel";
import CardDefault from "../primitives/cards/card-default";
import { colors } from "@material-tailwind/react/types/generic";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function ItinerariesPreviews({
  color,
}: {
  color: colors;
}) {
  const itineraries = await getItinerariesPreviews();

  return (
    <>
      {itineraries && (
        <CarouselContainer color={color}>
          {itineraries.map((card, i) => (
            <CarouselItem key={i} className="basis-full">
              <CardDefault
                slug={`/itineraries/${card.slug}`}
                title={card.title}
                subheader={
                  <p className="font-medium text-base">
                    <span className="font-bold text-lg">{card.days}</span> day
                    {card.days && card.days > 1 ? "s " : " "}
                    <span className="font-bold text-lg">
                      {card.attractions}
                    </span>{" "}
                    attractions
                  </p>
                }
                thumbnail={card.thumbnail}
                description={card.description}
                cta={card.cta}
                color={color}
                fullwidth
                onHomepage
              />
            </CarouselItem>
          ))}
        </CarouselContainer>
      )}
    </>
  );
}
