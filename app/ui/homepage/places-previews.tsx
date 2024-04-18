import CarouselWithCards from "../carousel-with-cards";
import { getPlacesPreviews } from "@/lib/api";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function PlacesPreviews({ slug }: { slug: string }) {
  const data = await getPlacesPreviews(slug);

  return (
    <>
      {data && (
        <CarouselWithCards
          slug={slug}
          color={data.color}
          cards={data.places}
        ></CarouselWithCards>
      )}
    </>
  );
}
