import CarouselWithCards from "../carousel-with-cards";
import { getPackagesPreviews } from "@/lib/api";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function PackagesPreviews() {
  const data = await getPackagesPreviews();

  return (
    <>
      {data && (
        <CarouselWithCards
          slug="packages"
          color={data.color}
          cards={data.packages}
          buttons="filled"
        ></CarouselWithCards>
      )}
    </>
  );
}
