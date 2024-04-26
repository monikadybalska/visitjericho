import {
  getPlaceDescription,
  getPlaceImage,
  getPlaceTitle,
} from "@/app/_lib/api";

import ListingHeader from "../../_components/listing-header";
import SectionLayout from "../../../_components/layouts/section-layout";
import Title from "../../_components/title";
import Description from "../../_components/description";
import ColumnsLayout from "@/app/_components/layouts/columns-layout";
import Location from "./_components/location";
import Booking from "./_components/booking";
import MorePlaces from "./_components/more-places";

export default function Page({
  params,
}: {
  params: { places: string; place: string };
}) {
  return (
    <>
      <ListingHeader slug={params.place} query={getPlaceImage} />
      <SectionLayout>
        <Title slug={params.place} query={getPlaceTitle} />
        <Description slug={params.place} query={getPlaceDescription} />
      </SectionLayout>
      <ColumnsLayout>
        <Location slug={params.place} />
        <Booking slug={params.place} />
      </ColumnsLayout>
      <SectionLayout>
        <MorePlaces
          placesPageSlug={params.places}
          placeSlug={params.place}
          color="yellow"
        />
      </SectionLayout>
    </>
  );
}
