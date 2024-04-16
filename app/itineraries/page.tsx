import { getItinerariesPage, getItinerariesPreviews } from "@/lib/api";
import CardDefault from "../components/primitives/cards/card-default";
import { ItinerariesPage, ItinerariesPreviews } from "@/lib/types";
import Image from "next/image";

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
