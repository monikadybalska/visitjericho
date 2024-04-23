import { getItinerariesPreviews, getItineraryInfo } from "@/lib/api";

import PostHeader from "../../../ui/subcategories/posts/header";
import PostHeading from "../../../ui/subcategories/posts/heading";
import SectionLayout from "../../../ui/layouts/section-layout";
import MapAndDescription from "@/app/ui/subcategories/posts/map-and-description";
import MoreItems from "../../../ui/subcategories/more-items";
import TimelineStepper from "../../../ui/subcategories/timeline-stepper/timeline-stepper";
import { Suspense } from "react";
import SkeletonCard from "@/app/ui/skeletons/card";
import FullwidthImage from "@/app/ui/skeletons/fullwidth-image";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function Page({
  params,
}: {
  params: { itinerary: string };
}) {
  const info = await getItineraryInfo(params.itinerary);
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
      {info && (
        <>
          <PostHeader image={info.image} />
          <PostHeading
            title={info.title}
            days={info.numberOfDays}
            attractions={info.numberOfAttractions}
            cta={info.cta}
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
