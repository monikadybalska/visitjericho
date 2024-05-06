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
import MosaicSkeleton from "@/app/_components/skeletons/mosaic";

import { Suspense } from "react";
import ParagraphSkeleton from "@/app/_components/skeletons/paragraph";
import ThreeCardsSkeleton from "@/app/_components/skeletons/three-cards";
import CardSkeleton from "@/app/_components/skeletons/card";

export const runtime = "edge";

export default function Page({
  params,
}: {
  params: { places: string; place: string };
}) {
  return (
    <>
      <Suspense fallback={<MosaicSkeleton />}>
        <ListingHeader slug={params.place} query={getPlaceImage} />
      </Suspense>
      <SectionLayout>
        <Suspense fallback={<ParagraphSkeleton />}>
          <Title slug={params.place} query={getPlaceTitle} />
        </Suspense>
        <Suspense fallback={<ParagraphSkeleton />}>
          <Description slug={params.place} query={getPlaceDescription} />
        </Suspense>
      </SectionLayout>
      <ColumnsLayout>
        <Suspense fallback={<CardSkeleton />}>
          <Location slug={params.place} />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <Booking slug={params.place} />
        </Suspense>
      </ColumnsLayout>
      <SectionLayout>
        <Suspense fallback={<ThreeCardsSkeleton />}>
          <MorePlaces
            placesPageSlug={params.places}
            placeSlug={params.place}
            color="yellow"
          />
        </Suspense>
      </SectionLayout>
    </>
  );
}
