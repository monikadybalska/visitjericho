import { Button } from "../exports";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../carousel/carousel";
import CardDefault from "../cards/card";
import { colors } from "@material-tailwind/react/types/generic";
import { Providers } from "@/app/providers";
import { HomepageSubsection } from "../../../lib/types";
import Link from "next/link";

export default function Subsection({
  slug,
  title,
  cta,
  places,
  color,
}: Pick<HomepageSubsection, "slug" | "title" | "cta" | "places" | "color">) {
  return (
    <Providers>
      <section
        className={
          title !== "Check out our tips and practicalities"
            ? "w-full pb-10 pt-14 max-w-screen-xl"
            : "w-full pb-0 pt-14 max-w-screen-xl"
        }
      >
        <div className="w-full flex justify-between gap-3">
          <h3
            className={`font-serif text-2xl sm:text-[2rem] text-black basis-1/2`}
          >
            {title}
          </h3>
          <Link href={slug}>
            <Button
              variant="text"
              color="black"
              size="md"
              className="p-0 hover:underline hover:bg-transparent text-md text-right font-[400]"
              ripple={false}
            >
              {`${cta} →`}
            </Button>
          </Link>
        </div>
        <Carousel opts={{ loop: true, align: "start" }}>
          <CarouselContent
            className={
              title[1] !== "Check out our tips and practicalities"
                ? "pr-20 md:pr-4"
                : "pr-4"
            }
          >
            {places.map((card, i) => {
              return (
                <CarouselItem
                  key={i}
                  className={
                    places.length > 2
                      ? "md:basis-1/2 lg:basis-1/3"
                      : "basis-1/2"
                  }
                >
                  <CardDefault
                    slug={`/${slug}/${card.slug}`}
                    title={card.title}
                    thumbnail={card.thumbnail}
                    description={card.description}
                    cta={card.cta}
                    color={color}
                    key={i}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious color={color} />
          <CarouselNext color={color} />
        </Carousel>
      </section>
    </Providers>
  );
}
