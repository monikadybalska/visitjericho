import { getPackagesPreviews } from "@/lib/api";
import CardDefault from "../../primitives/cards/card-default";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../../primitives/carousel/carousel";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function Packages() {
  const data = await getPackagesPreviews();

  return (
    <>
      {data && (
        <Carousel opts={{ loop: true, align: "start" }}>
          <CarouselContent className="pr-20 md:pr-4">
            {data.packages.map((card, i) => {
              return (
                <CarouselItem
                  key={i}
                  className="lg:basis-1/3 lg:flex lg:items-end"
                >
                  <CardDefault
                    title={card.title}
                    description={card.description}
                    color={data.color}
                    cta={card.cta}
                    slug="/packages"
                    key={i}
                    variant="filled"
                    buttonVariant={i === 1 ? "filled" : "outlined"}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious color={data.color} />
          <CarouselNext color={data.color} />
        </Carousel>
      )}
    </>
  );
}
