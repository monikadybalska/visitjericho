import { getItinerariesPage, getItinerariesPreviews } from "@/lib/api";
import SubcategoryHero from "../ui/subcategory-pages/header";
import SubcategoryListings from "../ui/subcategory-pages/listings";
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
            <SubcategoryListings
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
