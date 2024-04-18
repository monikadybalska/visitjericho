import { getItinerariesPage, getItinerariesPreviews } from "@/lib/api";
import SubcategoryHero from "@/app/ui/subcategories/header";
import Listings from "@/app/ui/subcategories/listings";
import { ItinerariesPage, ItinerariesPreviews } from "@/lib/types";

export default async function Itineraries() {
  const category: ItinerariesPage | null = await getItinerariesPage();
  const itineraries: ItinerariesPreviews | null =
    await getItinerariesPreviews();

  return (
    <>
      {category && (
        <>
          <SubcategoryHero
            image={category.image}
            title={category.title}
            subtitle={category.subtitle}
          />
          {itineraries && (
            <Listings
              slug="itineraries"
              color={itineraries.color}
              cards={itineraries.itineraries}
            />
          )}
        </>
      )}
    </>
  );
}
