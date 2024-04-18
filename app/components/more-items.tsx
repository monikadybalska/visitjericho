import { Preview, SubcategoryPreview } from "@/lib/types";
import CardDefault from "./primitives/cards/card-default";
import SectionLayout from "./section-layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./primitives/carousel/carousel";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function MoreItems({
  slug,
  title,
  color,
  cards,
  fullwidth,
}: {
  slug: string;
  title?: string;
  color: Preview["color"];
  cards: Preview[] | SubcategoryPreview[] | null;
  fullwidth?: boolean;
}) {
  return (
    <>
      {cards && (
        <SectionLayout>
          <h2 className="font-serif">{title}</h2>
          <Carousel opts={{ loop: true, align: "start" }}>
            <CarouselContent className="pr-20 md:pr-4">
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
            </CarouselContent>
            <CarouselPrevious color={color} />
            <CarouselNext color={color} />
          </Carousel>
        </SectionLayout>
      )}
    </>
  );
}
