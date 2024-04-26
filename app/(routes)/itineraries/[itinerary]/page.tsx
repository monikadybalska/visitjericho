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
import SkeletonCard from "@/app/_components/skeletons/card";
import FullwidthImage from "@/app/_components/skeletons/fullwidth-image";
import MoreItineraries from "./_components/more-itineraries";
import Directions from "./_components/directions";
import Description from "../../_components/description";
import Column from "../../../_components/layouts/column";

export default function Page({
  params,
}: {
  params: { itinerary: string; itineraries: string };
}) {
  return (
    <>
      <ListingHeader slug={params.itinerary} query={getItineraryImage} />
      <Heading slug={params.itinerary} query={getItineraryHeading} />
      <ColumnsLayout>
        <Directions slug={params.itinerary} />
        <Column>
          <SectionLayout>
            <Description
              slug={params.itinerary}
              query={getItineraryDescription}
            />
          </SectionLayout>
        </Column>
      </ColumnsLayout>
      <Suspense fallback={<FullwidthImage />}>
        <SectionLayout>
          <div className="w-full lg:px-20 pt-20 pb-20 flex flex-col gap-36 lg:gap-48">
            <TimelineStepper slug={params.itinerary} color="green" />
          </div>
        </SectionLayout>
      </Suspense>
      <Suspense fallback={<SkeletonCard />}>
        <SectionLayout>
          <MoreItineraries slug={params.itinerary} color="green" />
        </SectionLayout>
      </Suspense>
    </>
  );
}
