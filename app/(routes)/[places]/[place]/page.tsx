import { getPlaceOverview, getPlacesPreviews } from "@/lib/api";

import PostHeader from "../../components/post-header";
import PostDescription from "./components/description";
import SectionLayout from "../../../components/layouts/section-layout";
import LocationAndBooking from "./components/location-and-booking";
import MoreItems from "../../components/more-items";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function Page({
  params,
}: {
  params: { places: string; place: string };
}) {
  const place = await getPlaceOverview(params.place);
  const morePlaces = getPlacesPreviews(params.places).then((result) => {
    if (result) {
      return result.places.filter((place) => place.slug !== params.place);
    }
    return null;
  });

  return (
    place && (
      <>
        <PostHeader image={place.image} />
        <SectionLayout>
          <PostDescription
            title={place.title}
            description={place.description}
          />
        </SectionLayout>
        <LocationAndBooking slug={params.place} />
        <SectionLayout>
          <MoreItems title="See more places" color="yellow" data={morePlaces} />
        </SectionLayout>
      </>
    )
  );
}
