import { getItinerariesPage, getItinerariesPreviews } from "@/lib/api";
import { ItinerariesPage, ItinerariesPreviews } from "@/lib/types";

import SubcategoryHero from "../../components/header";
import Listings from "../../components/listings";
import SectionLayout from "../../../components/layouts/section-layout";

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
            <SectionLayout>
              <Listings
                slug="itineraries"
                color={itineraries.color}
                cards={itineraries.itineraries}
              />
            </SectionLayout>
          )}
        </>
      )}
    </>
  );
}
