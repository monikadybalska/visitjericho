import {
  getPlacesPage,
  getPlacesPreviews,
  getMoreSubcategoriesPreviews,
} from "@/lib/api";

import SectionLayout from "../../ui/layouts/section-layout";
import SubcategoryHero from "../../ui/subcategories/header";
import Listings from "../../ui/subcategories/listings";
import MoreItems from "../../ui/subcategories/more-items";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function Places({
  params,
}: {
  params: { places: string };
}) {
  const category = await getPlacesPage(params.places);
  const places = await getPlacesPreviews(params.places);
  const moreSubcategories = getMoreSubcategoriesPreviews(params.places);

  return (
    <>
      {category && (
        <>
          <SubcategoryHero
            image={category.image}
            title={category.title}
            subtitle={category.subtitle}
          />
          <div
            dangerouslySetInnerHTML={{ __html: `${category.description}` }}
          ></div>
          {places && (
            <SectionLayout>
              <Listings
                title={category.listingsTitle}
                slug={params.places}
                color={places.color}
                cards={places.places}
              />
            </SectionLayout>
          )}
          {params.places !== "meet-the-local-people" && (
            <SectionLayout>
              <MoreItems
                title={category.moreItemsTitle}
                color="yellow"
                data={moreSubcategories}
              />
            </SectionLayout>
          )}
        </>
      )}
    </>
  );
}
