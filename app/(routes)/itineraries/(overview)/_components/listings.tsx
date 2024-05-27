import CardDefault from "../../../../_components/primitives/cards/card-default";
import { colors } from "@material-tailwind/react/types/generic";
import { getItinerariesPreviews } from "@/app/_lib/api";

export default async function Listings({ color }: { color: colors }) {
  const listings = await getItinerariesPreviews();

  return (
    listings && (
      <div className="flex flex-wrap justify-between gap-6">
        {listings.map((card, i) => (
          <div key={i} className="basis-full pl-4 -ml-4">
            <CardDefault
              slug={`/itineraries/${card.slug}`}
              title={card.title}
              subheader={
                <p className="font-medium text-base">
                  <span className="font-bold text-lg">{card.days}</span> days{" "}
                  <span className="font-bold text-lg">{card.attractions}</span>{" "}
                  attractions
                </p>
              }
              thumbnail={card.thumbnail}
              description={card.description}
              cta={card.cta}
              color={color}
              // @ts-ignore: Incompatible module types
              variant="outlined" // eslint-disable-line
              fullwidth={true}
            />
          </div>
        ))}
      </div>
    )
  );
}
