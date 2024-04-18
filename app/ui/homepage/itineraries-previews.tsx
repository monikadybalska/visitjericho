import CarouselWithCards from "../carousel-with-cards";
import { getItinerariesPreviews } from "@/lib/api";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function ItinerariesPreviews() {
  const data = await getItinerariesPreviews();

  return (
    <>
      {data && (
        <CarouselWithCards
          slug="itineraries"
          color={data.color}
          fullwidth
          cards={data.itineraries}
        ></CarouselWithCards>
      )}
    </>
  );
}
