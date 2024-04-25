import { getItinerariesPreviews, getItineraryOverview } from "@/lib/api";

import PostHeader from "../../components/post-header";
import PostHeading from "./components/heading";
import SectionLayout from "../../../components/layouts/section-layout";
import MapAndDescription from "./components/map-and-description";
import MoreItems from "../../components/more-items";
import TimelineStepper from "./components/timeline-stepper/timeline-stepper";
import { Suspense } from "react";
import SkeletonCard from "@/app/components/skeletons/card";
import FullwidthImage from "@/app/components/skeletons/fullwidth-image";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function Page({
  params,
}: {
  params: { itinerary: string };
}) {
  const itinerary = await getItineraryOverview(params.itinerary);
  const moreItineraries = getItinerariesPreviews().then((result) => {
    if (result) {
      return result.itineraries.filter(
        (itinerary) => itinerary.slug !== params.itinerary
      );
    }
    return null;
  });

  return (
    <>
      {itinerary && (
        <>
          <PostHeader image={itinerary.image} />
          <PostHeading
            title={itinerary.title}
            days={itinerary.numberOfDays}
            attractions={itinerary.numberOfAttractions}
            cta={itinerary.cta}
          />
          <MapAndDescription slug={params.itinerary} />
          <Suspense fallback={<FullwidthImage />}>
            <SectionLayout>
              <div className="w-full lg:px-20 pt-20 pb-20 flex flex-col gap-36 lg:gap-48">
                <TimelineStepper slug={params.itinerary} color="green" />
              </div>
            </SectionLayout>
          </Suspense>
          <Suspense fallback={<SkeletonCard />}>
            <SectionLayout>
              <MoreItems
                title="See more itineraries"
                color="green"
                fullwidth
                data={moreItineraries}
              />
            </SectionLayout>
          </Suspense>
        </>
      )}
    </>
  );
}