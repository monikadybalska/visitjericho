import {
  CarouselContainer,
  CarouselItem,
} from "../../../../_components/primitives/carousel/carousel";
import CardDefault from "../../../../_components/primitives/cards/card-default";
import { MorePlacesPagesPreviews } from "@/app/_lib/types";
import { colors } from "@material-tailwind/react/types/generic";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function MorePlacesPages({
  slug,
  query,
  color,
}: {
  slug: string;
  query: (slug: string) => Promise<MorePlacesPagesPreviews | null>;
  color: colors;
}) {
  const data = await query(slug);
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
                  cta={card.ctaText}
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
