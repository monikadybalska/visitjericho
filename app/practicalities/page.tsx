import { getPracticalitiesPage } from "@/lib/api";
import CardSmallOutlined from "../components/primitives/cards/card-small-outlined";
import { PracticalitiesPage } from "@/lib/types";
import Image from "next/image";
import LightbulbIcon from "../components/icons/LightbulbIcon";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function Itineraries({
  params,
}: {
  params: { places: string };
}) {
  const category: PracticalitiesPage | null = await getPracticalitiesPage();

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
          <div className="mt-10">
            <h2 className="font-serif mb-10">{category.gettingThere.title}</h2>
            <div className="flex gap-4">
              <div className="flex flex-col gap-4">
                {category.gettingThere.cards
                  .filter((card, i) => i % 2 === 0)
                  .map((card, i) => (
                    <div key={i} className="md:basis-1/2">
                      <CardSmallOutlined
                        key={i}
                        title={card.title}
                        description={card.description}
                        color={category.color}
                      />
                    </div>
                  ))}
              </div>
              <div className="flex flex-col gap-4">
                {category.gettingThere.cards
                  .filter((card, i) => i % 2 !== 0)
                  .map((card, i) => (
                    <div key={i} className="md:basis-1/2">
                      <CardSmallOutlined
                        key={i}
                        title={card.title}
                        description={card.description}
                        color={category.color}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="font-serif mb-10">{category.tips.title}</h2>
            <div className="flex flex-col justify-between gap-4">
              <ul>
                {category.tips.tips.map((tip, i) => (
                  <li key={i}>
                    <div className="mb-4">
                      <div className="flex flex-row">
                        <LightbulbIcon
                          className={`w-6 h-6 sm:w-7 sm:h-7 mr-2 text-${category.color} fill-current`}
                        />
                        <h3 className="mb-2 font-serif">{tip.title}</h3>
                      </div>
                      <p>{tip.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
