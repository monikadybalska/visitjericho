import CardDefault from "../../../../_components/primitives/cards/card-default";
import { colors } from "@material-tailwind/react/types/generic";
import {
  CarouselContainer,
  CarouselItem,
} from "../../../../_components/primitives/carousel/carousel";
import { getMorePlaces } from "@/app/_lib/api";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function MorePlaces({
  placesPageSlug,
  placeSlug,
  color,
}: {
  placesPageSlug: string;
  placeSlug: string;
  color: colors;
}) {
  const data = await getMorePlaces(placesPageSlug, placeSlug);
  return (
    <>
      {data && (
        <>
          <h2 className="font-serif">{data.title}</h2>
          <CarouselContainer color={color}>
            {data.cards.map((card, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <CardDefault
                  slug={card.slug}
                  thumbnail={card.thumbnail}
                  title={card.title}
                  description={card.description}
                  cta={card.cta}
                  color={color}
                />
              </CarouselItem>
            ))}
          </CarouselContainer>
        </>
      )}
    </>
  );
}
