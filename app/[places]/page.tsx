import {
  getPlacesPage,
  getPlacesPreviews,
  getSeeAndDoPreviews,
} from "@/lib/api";
import CardDefault from "../components/primitives/cards/card-default";
import Image from "next/image";
import SubcategoryHero from "../components/subcategory-pages/hero";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function Places({
  params,
}: {
  params: { places: string };
}) {
  const category = await getPlacesPage(params.places);
  const places = await getPlacesPreviews(params.places);
  const subcategories =
    params.places !== "meet-the-local-people"
      ? await getSeeAndDoPreviews(params.places)
      : null;

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
            <div>
              <h2 className="font-serif text-center">
                {category.listingsTitle}
              </h2>
              <div className="flex flex-wrap justify-between">
                {places.places.map((card, i) => (
                  <div key={i} className="md:basis-1/2 lg:basis-1/3 pl-4 -ml-4">
                    <CardDefault
                      slug={`/${params.places}/${card.slug}`}
                      title={card.title}
                      thumbnail={card.thumbnail}
                      description={card.description}
                      cta={card.cta}
                      color={places.color}
                      key={i}
                      variant="outlined"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {subcategories &&
            places &&
            params.places !== "meet-the-local-people" && (
              <div>
                <h2 className="font-serif">{category.moreItemsTitle}</h2>
                <div className="flex justify-between">
                  {subcategories.map((card, i) => (
                    <div
                      key={i}
                      className="md:basis-1/2 lg:basis-1/3 pl-4 -ml-4"
                    >
                      <CardDefault
                        slug={`/${card.slug}`}
                        thumbnail={card.thumbnail}
                        title={card.title}
                        cta={card.cta}
                        color={places.color}
                        key={i}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
        </>
      )}
    </>
  );
}
