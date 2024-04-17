import { Preview } from "@/lib/types";
import CardDefault from "../primitives/cards/card-default";
import SectionLayout from "../section-layout";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function SubcategoryListings({
  title,
  slug,
  color,
  cards,
}: {
  title?: string;
  slug: string;
  color: Preview["color"];
  cards: Preview[];
}) {
  return (
    <SectionLayout>
      {title && <h2 className="font-serif text-center">{title}</h2>}
      <div className="flex flex-wrap justify-between gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`basis-full pl-4 -ml-4 ${
              slug !== "itineraries" && "md:basis-1/2 lg:basis-1/3"
            }`}
          >
            <CardDefault
              slug={`/${slug}/${card.slug}`}
              title={card.title}
              thumbnail={card.thumbnail}
              description={card.description}
              cta={card.cta}
              color={color}
              key={i}
              variant="outlined"
              fullwidth={slug === "itineraries"}
            />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
