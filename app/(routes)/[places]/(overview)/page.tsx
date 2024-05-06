import {
  getMorePlacesPagesPreviews,
  getPlacesPageHeader,
  getPlacesPageDescription,
} from "@/app/_lib/api";

import SectionLayout from "../../../_components/layouts/section-layout";
import Header from "../../_components/header";
import Listings from "./_components/listings";
import MorePlacesPages from "./_components/more-places-pages";
import Description from "../../_components/description";
import MosaicSkeleton from "@/app/_components/skeletons/mosaic";

import { Suspense } from "react";
import ParagraphSkeleton from "@/app/_components/skeletons/paragraph";
import ThreeCardsSkeleton from "@/app/_components/skeletons/three-cards";
import ListingsSkeleton from "@/app/_components/skeletons/listings";

export const runtime = "edge";

export default function Places({ params }: { params: { places: string } }) {
  return (
    <>
      <Suspense fallback={<MosaicSkeleton />}>
        <Header slug={params.places} query={getPlacesPageHeader} />
      </Suspense>
      <Suspense fallback={<ParagraphSkeleton />}>
        <Description slug={params.places} query={getPlacesPageDescription} />
      </Suspense>
      <SectionLayout>
        <Suspense fallback={<ListingsSkeleton />}>
          <Listings
            slug={params.places}
            color={
              params.places === "meet-the-local-people" ? "pink" : "yellow"
            }
          />
        </Suspense>
      </SectionLayout>
      {params.places !== "meet-the-local-people" && (
        <SectionLayout>
          <Suspense fallback={<ThreeCardsSkeleton />}>
            <MorePlacesPages
              slug={params.places}
              query={getMorePlacesPagesPreviews}
              color="yellow"
            />
          </Suspense>
        </SectionLayout>
      )}
    </>
  );
}
