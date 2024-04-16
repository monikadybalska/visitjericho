import { Preview, SubcategoryPreview } from "@/lib/types";
import { getSeeAndDoPreviews } from "@/lib/api";
import CardDefault from "../primitives/cards/card-default";
import SectionLayout from "./section-layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../primitives/carousel/carousel";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function MoreItems({
  slug,
  title,
  color,
}: {
  slug: string;
  title?: string;
  color: Preview["color"];
}) {
  const subcategories = await getSeeAndDoPreviews(slug);

  return (
    <>
      {subcategories && (
        <SectionLayout>
          <h2 className="font-serif">{title}</h2>
          <Carousel opts={{ loop: true, align: "start" }}>
            <CarouselContent className="pr-20 md:pr-4">
              {subcategories.map((card, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <CardDefault
                    slug={`/${card.slug}`}
                    thumbnail={card.thumbnail}
                    title={card.title}
                    cta={card.cta}
                    color={color}
                    key={i}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </SectionLayout>
      )}
    </>
  );
}
