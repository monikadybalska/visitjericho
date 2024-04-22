import { getItinerariesPreviews, getItinerary } from "@/lib/api";

import PostHeader from "../../../ui/subcategories/posts/header";
import ColumnsLayout from "../../../ui/layouts/columns-layout";
import PostHeading from "../../../ui/subcategories/posts/heading";
import SectionLayout from "../../../ui/layouts/section-layout";
import Column from "../../../ui/layouts/column";
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
  const itinerary = await getItinerary(params.itinerary);
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
          <ColumnsLayout>
            <Column>
              <SectionLayout>
                <h2 className="font-serif">Getting there</h2>
                <p>Get directions</p>
              </SectionLayout>
            </Column>
            <Column>
              <SectionLayout>
                <div
                  dangerouslySetInnerHTML={{ __html: `${itinerary.content}` }}
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
