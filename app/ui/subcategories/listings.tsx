import { Preview } from "@/lib/types";

import CardDefault from "../primitives/cards/card-default";

export default function Listings({
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
    <>
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
              // @ts-ignore: Incompatible module types
              variant="outlined" // eslint-disable-line
              fullwidth={slug === "itineraries"}
            />
          </div>
        ))}
      </div>
    </>
  );
}
