import {
  getPlacesPage,
  getPlacesPreviews,
  getSeeAndDoPreviews,
} from "@/lib/api";
import CardDefault from "../components/primitives/cards/card-default";
import Image from "next/image";

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
          <div className="relative h-96 lg:h-[32rem] 3xl:h-[50rem] w-full overflow-y-hidden flex items-center justify-center">
            <div className="block">
              <Image
                src={category.image.node.mediaItemUrl}
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-center z-0"
                priority
              />
            </div>
            <div className="bg-white/80 flex justify-center px-5 py-8 md:px-20 z-10 relative">
              <div className="w-full max-w-screen-xl flex flex-col gap-6 z-20">
                <h1 className="font-serif">{category.title}</h1>
                <p>{category.subtitle}</p>
              </div>
            </div>
          </div>
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
