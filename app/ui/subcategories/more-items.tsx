import { Preview, SubcategoryPreview } from "@/lib/types";

import {
  CarouselContainer,
  CarouselItem,
} from "../primitives/carousel/carousel";
import CardDefault from "../primitives/cards/card-default";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function MoreItems({
  slug,
  title,
  color,
  cards,
  fullwidth,
}: {
  slug?: string;
  title?: string;
  color: any;
  cards: Preview[] | SubcategoryPreview[] | null;
  fullwidth?: boolean;
}) {
  return (
    <>
      {cards && (
        <>
          <h2 className="font-serif">{title}</h2>
          <CarouselContainer color={color}>
            {cards
              .filter((card) => card.slug !== slug)
              .map((card, i) => (
                <CarouselItem
                  key={i}
                  className={
                    fullwidth
                      ? "md:basis-full lg:basis-full"
                      : "md:basis-1/2 lg:basis-1/3"
                  }
                >
                  <CardDefault
                    slug={card.slug}
                    thumbnail={card.thumbnail}
                    title={card.title}
                    description={card.description}
                    cta={card.cta}
                    color={color}
                    key={i}
                    fullwidth={fullwidth}
                  />
                </CarouselItem>
              ))}
          </CarouselContainer>
        </>
      )}
    </>
  );
}
