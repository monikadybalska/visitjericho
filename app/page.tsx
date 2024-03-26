import HomepageHero from "./components/homepage-hero";
import CardDefault from "./components/carousel/card";
import { cardsContent } from "./components/carousel/cards-content";
import { color } from "@material-tailwind/react/types/components/alert";
import PricingPreview from "./components/pricing/pricing-packages-preview";
import { Button } from "./components/exports";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/carousel/carousel";

export default function Home() {
  return (
    <main className="w-full border border-transparent">
      <HomepageHero />
      {cardsContent.map(
        (section: {
          label: string;
          color: color | undefined;
          subsections: {
            title: string;
            cards: {
              title: string;
              image?: string;
              description: string;
            }[];
          }[];
        }) => {
          return (
            <section
              className="flex w-full justify-center flex-col mt-16"
              key={section.label}
            >
              <div
                role="label"
                className={`uppercase bg-${section.color}-light pl-5 py-2 sm:pl-20 items-center flex w-2/5 rounded-r-md`}
              >
                <h2 className="font-medium text-base">{section.label}</h2>
              </div>
              <div className="flex flex-col w-full items-center px-5 sm:px-20">
                {section.subsections.map((subsection) => {
                  return (
                    <section
                      className="w-full pb-10 pt-14 max-w-screen-xl "
                      key={subsection.title}
                    >
                      <div className="w-full flex justify-between">
                        <h3 className="font-serif text-2xl sm:text-[2rem]">
                          {subsection.title}
                        </h3>
                        <Button
                          variant="text"
                          color="black"
                          size="md"
                          className="p-0 hover:underline hover:bg-transparent text-md"
                          ripple={false}
                        >
                          View more →
                        </Button>
                      </div>
                      <Carousel>
                        <CarouselContent>
                          {subsection.cards.map((card, i) => {
                            return (
                              <CarouselItem
                                key={i}
                                className={
                                  subsection.cards.length > 2
                                    ? subsection.title !==
                                      "Explore trip ideas and itineraries"
                                      ? "md:basis-1/2 lg:basis-1/3"
                                      : "basis-full"
                                    : "basis-1/2"
                                }
                              >
                                <CardDefault
                                  title={card.title}
                                  image={card.image}
                                  description={card.description}
                                  color={section.color}
                                  key={i}
                                />
                              </CarouselItem>
                            );
                          })}
                        </CarouselContent>
                        {subsection.title !==
                          "Check out our tips and practicalities" && (
                          <>
                            <CarouselPrevious color={section.color} />
                            <CarouselNext color={section.color} />
                          </>
                        )}
                      </Carousel>
                    </section>
                  );
                })}
              </div>
            </section>
          );
        }
      )}
      <PricingPreview />
    </main>
  );
}
