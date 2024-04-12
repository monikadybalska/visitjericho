import { getSubcategory, getPlacesPreviews } from "@/lib/api";
import CardOutlined from "../components/primitives/cards/card-outlined";
import { color } from "@material-tailwind/react/types/components/alert";
import { Subcategory, PlacesPreviews } from "@/lib/types";
import Image from "next/image";

export default async function Places({
  params,
}: {
  params: { places: string };
}) {
  const category: Subcategory | null = await getSubcategory(params.places);
  const places: PlacesPreviews | null = await getPlacesPreviews(params.places);

  return (
    <div>
      {category && (
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
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-wrap justify-between">
        {category &&
          places &&
          places.places.map((card, i) => (
            <div key={i} className="basis-1/3 pl-4 -ml-4">
              <CardOutlined
                slug={`/${params.places}/${card.slug}`}
                title={card.title}
                thumbnail={card.thumbnail}
                description={card.description}
                cta={card.cta}
                color={card.color}
                key={i}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
