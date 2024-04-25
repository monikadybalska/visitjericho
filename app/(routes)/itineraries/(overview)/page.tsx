import { getItinerariesPage, getItinerariesPreviews } from "@/app/_lib/api";
import { ItinerariesPage, ItinerariesPreviews } from "@/app/_lib/types";

import SubcategoryHero from "../../_components/header";
import Listings from "../../_components/listings";
import SectionLayout from "../../../_components/layouts/section-layout";

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
