import { getSectionPreviews } from "@/lib/api";
import CardOutlined from "../components/cards/card-outlined";
import { color } from "@material-tailwind/react/types/components/alert";
import { Category } from "@/lib/types";
import Image from "next/image";

export default async function Sights({
  params,
}: {
  params: { category: string };
}) {
  const sectionData = await getSectionPreviews(params.category);
  console.log(sectionData);
  return (
    <div>
      {sectionData && (
        <div className="relative h-96 lg:h-[32rem] 3xl:h-[50rem] w-full overflow-y-hidden flex items-center justify-center">
          <div className="block">
            <Image
              src={sectionData.image.node.mediaItemUrl}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center z-0"
              priority
            />
          </div>
          <div className="bg-white/80 flex justify-center px-5 py-8 md:px-20 z-10 relative">
            <div className="w-full max-w-screen-xl flex flex-col gap-6 z-20">
              <h1 className="font-serif">{sectionData.title}</h1>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-wrap justify-between">
        {sectionData &&
          sectionData.places.map((card, i) => (
            <div key={i} className="basis-1/3 pl-4 -ml-4">
              <CardOutlined
                slug={`/${params.category}/${card.slug}`}
                title={card.title}
                thumbnail={card.thumbnail}
                description={card.description}
                cta={card.cta}
                color={sectionData.color}
                key={i}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
