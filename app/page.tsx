import CarouselLarge from "./components/carousel/carousel-lg";
import CarouselMedium from "./components/carousel/carousel-md";
import CarouselSmall from "./components/carousel/carousel-sm";
import HomepageHero from "./components/homepage-hero";
import CardDefault from "./components/carousel/card";
import { cardsContent } from "./components/carousel/cards-content";
import { color } from "@material-tailwind/react/types/components/alert";
import { Card } from "@material-tailwind/react";
import PricingPreview from "./components/pricing/pricing-packages-preview";
import { Button } from "./components/exports";

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
              className="flex w-full justify-center flex-col overflow-visible mt-16"
              key={section.label}
            >
              <div
                role="label"
                className={`uppercase bg-${section.color}-light pl-5 py-2 sm:pl-20 items-center flex w-2/5 rounded-r-md`}
              >
                <p>{section.label}</p>
              </div>
              <div className="flex flex-col w-full items-center px-5 pt-8 sm:px-20">
                {section.subsections.map((subsection) => {
                  return (
                    <section
                      className="w-full max-w-screen-xl pb-10"
                      key={subsection.title}
                    >
                      <div className="w-full flex justify-between pr-3">
                        <h2 className="font-serif">{subsection.title}</h2>
                        <Button
                          variant="text"
                          color="black"
                          className="p-0 hover:underline hover:bg-transparent text-sm"
                          ripple={false}
                        >
                          View more →
                        </Button>
                      </div>
                      {subsection.cards.length >= 3 && (
                        <>
                          <CarouselLarge
                            cards={subsection.cards}
                            color={section.color}
                            className="hidden lg:flex"
                          />
                          <CarouselMedium
                            cards={subsection.cards}
                            color={section.color}
                            className="hidden md:flex lg:hidden"
                          />
                          <CarouselSmall
                            cards={subsection.cards}
                            color={section.color}
                            className="md:hidden"
                          />
                        </>
                      )}
                      {subsection.cards.length <= 2 && (
                        <>
                          <CarouselMedium
                            cards={subsection.cards}
                            color={section.color}
                            className="hidden md:flex"
                          />
                          <CarouselSmall
                            cards={subsection.cards}
                            color={section.color}
                            className="md:hidden"
                          />
                        </>
                      )}
                    </section>
                  );
                })}
              </div>
            </section>
          );
        }
      )}
      <section className="flex w-full justify-center flex-col overflow-visible mt-16">
        <div
          role="label"
          className={`uppercase bg-orange-light pl-5 py-2 sm:pl-20 items-center flex w-2/5 rounded-r-md`}
        >
          <p>Book a tour</p>
        </div>
        <div className="flex flex-col w-full items-center px-5 pt-8 sm:px-20">
          <section className="w-full max-w-screen-xl">
            <h2 className="font-serif">
              Learn from local guides with our tour packages
            </h2>
            <PricingPreview />
            <div className="pt-4 flex justify-end">
              <Button
                variant="text"
                color="black"
                className="p-0 hover:underline hover:bg-transparent text-sm"
                ripple={false}
              >
                Learn more →
              </Button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
