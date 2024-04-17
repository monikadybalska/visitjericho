import {
  getPlacesPage,
  getPlacesPreviews,
  getSeeAndDoPreviews,
} from "@/lib/api";
import SubcategoryHero from "../components/subcategory-pages/header";
import SubcategoryListings from "../components/subcategory-pages/listings";
import MoreItems from "../components/more-items";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function Places({
  params,
}: {
  params: { places: string };
}) {
  const category = await getPlacesPage(params.places);
  const places = await getPlacesPreviews(params.places);
  const moreSubcategories = await getSeeAndDoPreviews(params.places);

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
            <SubcategoryListings
              title={category.listingsTitle}
              slug={params.places}
              color={places.color}
              cards={places.places}
            />
          )}
          {params.places !== "meet-the-local-people" && (
            <MoreItems
              slug={params.places}
              title={category.moreItemsTitle}
              color="yellow"
              cards={moreSubcategories}
            />
          )}
        </>
      )}
    </>
  );
}
