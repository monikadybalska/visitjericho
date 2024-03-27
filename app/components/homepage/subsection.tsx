import { Button } from "../exports";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../carousel/carousel";
import CardDefault from "../carousel/card";
import { colors } from "@material-tailwind/react/types/generic";

export default function Subsection({
  title,
  cards,
  color,
  cta,
}: {
  title: string[];
  cards: {
    title: string;
    image?: string;
    description: string;
  }[];
  color: colors | undefined;
  cta: string;
}) {
  return (
    <section
      className={
        title[1] !== "tips and practicalities"
          ? "w-full pb-10 pt-14 max-w-screen-xl"
          : "w-full pb-0 pt-14 max-w-screen-xl"
      }
    >
      <div className="w-full flex justify-between gap-3">
        <h3
          className={`font-serif text-2xl sm:text-[2rem] text-black basis-1/2`}
        >
          {title[0]}
          <span className={`text-${color}`}>{title[1]}</span>
        </h3>
        <Button
          variant="text"
          color="black"
          size="md"
          className="p-0 hover:underline hover:bg-transparent text-md text-right"
          ripple={false}
        >
          {`${cta} →`}
        </Button>
      </div>
      <Carousel opts={{ loop: true, align: "start" }}>
        <CarouselContent
          className={
            title[1] !== "tips and practicalities" ? "pr-20 md:pr-4" : "pr-4"
          }
        >
          {cards.map((card, i) => {
            return (
              <CarouselItem
                key={i}
                className={
                  cards.length > 2
                    ? title[1] !== "ideas and itineraries"
                      ? "md:basis-1/2 lg:basis-1/3"
                      : "basis-full"
                    : "basis-1/2"
                }
              >
                <CardDefault
                  title={card.title}
                  image={card.image}
                  description={card.description}
                  color={color}
                  key={i}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        {title[1] !== "tips and practicalities" && (
          <>
            <CarouselPrevious color={color} />
            <CarouselNext color={color} />
          </>
        )}
      </Carousel>
    </section>
  );
}
