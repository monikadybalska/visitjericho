import { getPackagesPage } from "@/lib/api";
import CardSmallOutlined from "../components/primitives/cards/card-small-outlined";
import Image from "next/image";
import { StepperWithContent } from "../components/primitives/stepper/stepper";
import ProductCardOutlined from "../components/primitives/cards/product-card-outlined";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/primitives/carousel/carousel";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function Packages() {
  const category = await getPackagesPage();

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
          <div>
            <h2 className="font-serif mb-10">{category.benefits.title}</h2>
            <div className="flex gap-4">
              <div className="flex flex-col gap-4 basis-1/2">
                {category.benefits.cards
                  .filter((card, i) => i % 2 === 0)
                  .map((card, i) => (
                    <div key={i}>
                      <CardSmallOutlined
                        key={i}
                        title={card.title}
                        description={card.description}
                        color={category.color}
                      />
                    </div>
                  ))}
              </div>
              <div className="flex flex-col gap-4 basis-1/2">
                {category.benefits.cards
                  .filter((card, i) => i % 2 !== 0)
                  .map((card, i) => (
                    <div key={i}>
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
          <div>
            <h2 className="font-serif mb-10">{category.howItWorks.title}</h2>
            <div className="flex gap-4">
              <div className="w-full flex flex-col">
                <StepperWithContent
                  color={category.color}
                  steps={category.howItWorks.steps}
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-serif mb-10">{category.packages.title}</h2>
            <Carousel opts={{ loop: true, align: "start" }}>
              <CarouselContent className="pr-20 md:pr-4">
                {category.packages.packages.map((card, i) => {
                  return (
                    <CarouselItem
                      key={i}
                      className="lg:basis-1/3 lg:flex lg:items-end"
                    >
                      <ProductCardOutlined
                        title={card.title}
                        description={card.description}
                        color={category.color}
                        cta={card.cta}
                        key={i}
                        main={i === 1 ? true : false}
                      />
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious color={category.color} />
              <CarouselNext color={category.color} />
            </Carousel>
          </div>
        </>
      )}
    </>
  );
}
