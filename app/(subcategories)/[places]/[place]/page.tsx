import { getPlace, getPlacesPreviews } from "@/lib/api";
import MoreItems from "@/app/ui/more-items";
import PlacesPageHeader from "@/app/ui/places-page/header";
import PlacesPageDescription from "@/app/ui/places-page/description";
import SectionLayout from "@/app/ui/section-layout";
import Column from "@/app/ui/column";

export default async function Page({
  params,
}: {
  params: { category: string; place: string };
}) {
  const postData = await getPlace(params.place);
  const morePlaces = await getPlacesPreviews("sights");

  return (
    <>
      <PlacesPageHeader image={postData.placeFields.image} />
      <PlacesPageDescription
        title={postData.title}
        description={postData.content}
      />
      <SectionLayout>
        <div className="flex justify-between gap-4">
          <Column>
            <h2 className="font-serif">
              {postData.placeFields.gettingThere.title}
            </h2>
            <p>{postData.placeFields.gettingThere.description}</p>
          </Column>
          <Column>
            <h2 className="font-serif">
              {postData.placeFields.makeABooking.heading}
            </h2>
            <p>{postData.placeFields.makeABooking.description}</p>
          </Column>
        </div>
      </SectionLayout>
      <MoreItems
        slug={params.place}
        title="See more places"
        color="yellow"
        cards={morePlaces ? morePlaces.places : null}
      />
    </>
  );
}