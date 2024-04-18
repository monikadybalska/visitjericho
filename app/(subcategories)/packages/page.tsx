import { getPackagesPage } from "@/lib/api";
import CardSmall from "@/app/ui/primitives/cards/card-small";
import CardDefault from "@/app/ui/primitives/cards/card-default";
import SubcategoryHero from "@/app/ui/subcategories/header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../../ui/primitives/carousel/carousel";
import SightsIcon from "@/app/ui/icons/SightsIcon";
import { StepperDefault } from "../../ui/primitives/stepper/stepper";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function Packages() {
  const category = await getPackagesPage();

  return (
    <>
      {category && (
        <>
          <SubcategoryHero
            image={category.image}
            title={category.title}
            subtitle={category.subtitle}
          />
          <div>
            <h2 className="font-serif mb-10">{category.benefits.title}</h2>
            <div className="flex gap-4">
              <div className="flex flex-col gap-4 basis-1/2">
                {category.benefits.cards
                  .filter((card, i) => i % 2 === 0)
                  .map((card, i) => (
                    <div key={i}>
                      <CardSmall
                        key={i}
                        title={card.title}
                        description={card.description}
                        color={category.color}
                        variant="outlined"
                        icon={SightsIcon}
                      />
                    </div>
                  ))}
              </div>
              <div className="flex flex-col gap-4 basis-1/2">
                {category.benefits.cards
                  .filter((card, i) => i % 2 !== 0)
                  .map((card, i) => (
                    <div key={i}>
                      <CardSmall
                        key={i}
                        title={card.title}
                        description={card.description}
                        color={category.color}
                        variant="outlined"
                        icon={SightsIcon}
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
                <div className="w-full px-20 pt-4 pb-36">
                  <StepperDefault
                    color={category.color}
                    steps={category.howItWorks.steps}
                  />
                </div>
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
                      <CardDefault
                        title={card.title}
                        description={card.description}
                        color={category.color}
                        cta={card.cta}
                        slug="/packages"
                        key={i}
                        variant="outlined"
                        buttonVariant={i === 1 ? "filled" : "outlined"}
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
