import { getItinerariesPage, getItinerariesPreviews } from "@/lib/api";
import CardDefault from "../components/primitives/cards/card-default";
import SubcategoryHero from "../components/subcategory-pages/hero";
import { ItinerariesPage, ItinerariesPreviews } from "@/lib/types";

export default async function Itineraries({
  params,
}: {
  params: { places: string };
}) {
  const category: ItinerariesPage | null = await getItinerariesPage();
  const itineraries: ItinerariesPreviews | null = await getItinerariesPreviews(
    "itineraries"
  );

  return (
    <div>
      {category && (
        <>
          <SubcategoryHero
            image={category.image}
            title={category.title}
            subtitle={category.subtitle}
          />
          {itineraries && (
            <div>
              <div className="flex flex-wrap justify-between">
                {itineraries.itineraries.map((card, i) => (
                  <div key={i} className="basis-full pl-4 -ml-4">
                    <CardDefault
                      slug={`/${params.places}/${card.slug}`}
                      title={card.title}
                      thumbnail={card.thumbnail}
                      description={card.description}
                      cta={card.cta}
                      color={itineraries.color}
                      key={i}
                      fullwidth
                      variant="outlined"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
