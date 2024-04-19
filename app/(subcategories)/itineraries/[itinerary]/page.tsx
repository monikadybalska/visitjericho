import { getItinerariesPreviews, getItinerary } from "@/lib/api";

import PostHeader from "../../../ui/subcategories/posts/header";
import ColumnsLayout from "../../../ui/layouts/columns-layout";
import PostHeading from "../../../ui/subcategories/posts/heading";
import SectionLayout from "../../../ui/layouts/section-layout";
import Column from "../../../ui/layouts/column";
import MoreItems from "../../../ui/subcategories/more-items";
import { NestedStepper } from "../../../ui/primitives/stepper/nested-stepper";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function Page({
  params,
}: {
  params: { itinerary: string };
}) {
  const itinerary = await getItinerary(params.itinerary);
  const moreItineraries = await getItinerariesPreviews();

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
          <SectionLayout>
            <div className="w-full lg:px-20 pt-20 pb-20 flex flex-col gap-36 lg:gap-48">
              <NestedStepper
                days={[
                  itinerary.timeline.day1,
                  itinerary.timeline.day2,
                  itinerary.timeline.day3,
                ].filter((day) => day[0].title)}
                color="green"
              />
            </div>
          </SectionLayout>
          <SectionLayout>
            <MoreItems
              slug="itineraries"
              title="See more itineraries"
              color="green"
              fullwidth
              cards={
                moreItineraries
                  ? moreItineraries.itineraries.filter(
                      (itinerary) => itinerary.slug !== params.itinerary
                    )
                  : null
              }
            />
          </SectionLayout>
        </>
      )}
    </>
  );
}
