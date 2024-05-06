import {
  getItineraryDescription,
  getItineraryHeading,
  getItineraryImage,
} from "@/app/_lib/api";

import ListingHeader from "../../_components/listing-header";
import Heading from "./_components/heading";
import ColumnsLayout from "@/app/_components/layouts/columns-layout";
import SectionLayout from "../../../_components/layouts/section-layout";
import TimelineStepper from "./_components/timeline-stepper/timeline-stepper";
import { Suspense } from "react";
import FullwidthImage from "@/app/_components/skeletons/fullwidth-image";
import MoreItineraries from "./_components/more-itineraries";
import Directions from "./_components/directions";
import Description from "../../_components/description";
import Column from "../../../_components/layouts/column";
import MosaicSkeleton from "@/app/_components/skeletons/mosaic";
import CardSkeleton from "@/app/_components/skeletons/card";
import ParagraphSkeleton from "@/app/_components/skeletons/paragraph";

export const runtime = "edge";

export default function Page({
  params,
}: {
  params: { itinerary: string; itineraries: string };
}) {
  return (
    <>
      <Suspense fallback={<MosaicSkeleton />}>
        <ListingHeader slug={params.itinerary} query={getItineraryImage} />
      </Suspense>
      <Suspense fallback={<ParagraphSkeleton />}>
        <Heading slug={params.itinerary} query={getItineraryHeading} />
      </Suspense>
      <ColumnsLayout>
        <Suspense fallback={<CardSkeleton />}>
          <Directions slug={params.itinerary} />
        </Suspense>
        <Column>
          <SectionLayout>
            <Suspense fallback={<ParagraphSkeleton />}>
              <Description
                slug={params.itinerary}
                query={getItineraryDescription}
              />
            </Suspense>
          </SectionLayout>
        </Column>
      </ColumnsLayout>
      <SectionLayout>
        <div className="w-full lg:px-20 pt-20 pb-20 flex flex-col gap-36 lg:gap-48">
          <Suspense fallback={<FullwidthImage />}>
            <TimelineStepper slug={params.itinerary} color="green" />
          </Suspense>
        </div>
      </SectionLayout>
      <SectionLayout>
        <Suspense fallback={<CardSkeleton />}>
          <MoreItineraries slug={params.itinerary} color="green" />
        </Suspense>
      </SectionLayout>
    </>
  );
}
