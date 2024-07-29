import CardDefault from "../../../../_components/primitives/cards/card-default";
import { colors } from "@material-tailwind/react/types/generic";
import { getPlacesPageListings } from "@/app/_lib/api";

export default async function Listings({
  slug,
  color,
}: {
  slug: string;
  color: colors;
}) {
  const listings = await getPlacesPageListings(slug);
  return (
    listings && (
      <>
        <h2 className="font-serif text-center">{listings.title}</h2>
        <div className="flex flex-wrap justify-between gap-6">
          {listings.cards.map((card, i) => (
            <div key={i} className="pl-4 -ml-4 md:basis-1/2 lg:basis-1/3">
              <CardDefault
                slug={`/${slug}/${card.slug}`}
                title={card.title}
                thumbnail={card.thumbnail}
                description={card.description}
                cta={card.cta}
                color={color}
                className="md:min-h-[366px] xl:min-h-[416px]"
                // @ts-ignore: Incompatible module types
                variant="outlined" // eslint-disable-line
              />
            </div>
          ))}
        </div>
      </>
    )
  );
}
