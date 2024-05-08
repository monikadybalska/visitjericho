import { getItinerariesPageHeader } from "@/app/_lib/api";

import Header from "../../_components/header";
import Listings from "./_components/listings";
import SectionLayout from "../../../_components/layouts/section-layout";
import { Suspense } from "react";
import MosaicSkeleton from "@/app/_components/skeletons/mosaic";
import ListingsSkeleton from "@/app/_components/skeletons/listings";

export const runtime = "edge";

export default function Itineraries() {
  return (
    <>
      <Suspense fallback={<MosaicSkeleton />}>
        <Header slug="itineraries" query={getItinerariesPageHeader} />
      </Suspense>
      <SectionLayout>
        <Suspense fallback={<ListingsSkeleton />}>
          <Listings color="green" />
        </Suspense>
      </SectionLayout>
    </>
  );
}
