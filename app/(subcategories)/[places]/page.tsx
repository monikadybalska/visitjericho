import {
  getPlacesPage,
  getPlacesPreviews,
  getSeeAndDoPreviews,
} from "@/lib/api";
import SubcategoryHero from "@/app/ui/subcategories/header";
import Listings from "@/app/ui/subcategories/listings";
import MoreItems from "@/app/ui/more-items";

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
            <Listings
              title={category.listingsTitle}
              slug={params.places}
              color={places.color}
              cards={places.places}
            />
          )}
          {params.places !== "meet-the-local-people" && (
            <MoreItems
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
