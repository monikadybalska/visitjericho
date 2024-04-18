import { getItinerariesPreviews, getItinerary } from "@/lib/api";
import MoreItems from "@/app/ui/more-items";
import PostHeader from "@/app/ui/subcategories/posts/header";
import SectionLayout from "@/app/ui/section-layout";
import Column from "@/app/ui/column";
import PostHeading from "@/app/ui/subcategories/posts/heading";
import { NestedStepper } from "@/app/ui/primitives/stepper/nested-stepper/outer-stepper";

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
          <SectionLayout>
            <div className="flex justify-between gap-4">
              <Column>
                <h2 className="font-serif">Getting there</h2>
                <p>Get directions</p>
              </Column>
              <Column>
                <div
                  dangerouslySetInnerHTML={{ __html: `${itinerary.content}` }}
                />
              </Column>
            </div>
          </SectionLayout>
          <div>
            <h2 className="font-serif mb-10">Timeline</h2>
            <div className="flex gap-4">
              <div className="w-full flex flex-col">
                <div className="w-full px-20 pt-4 pb-20 flex flex-col gap-48">
                  <NestedStepper
                    days={[
                      itinerary.timeline.day1,
                      itinerary.timeline.day2,
                      itinerary.timeline.day3,
                    ]}
                    color="green"
                  />
                </div>
              </div>
            </div>
          </div>
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
        </>
      )}
    </>
  );
}
