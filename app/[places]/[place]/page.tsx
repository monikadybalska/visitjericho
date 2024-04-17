import { getPlace, getPlacesPreviews } from "@/lib/api";
import MoreItems from "@/app/components/more-items";
import PlacesPageHeader from "@/app/components/places-page/header";
import PlacesPageDescription from "../../components/places-page/description";
import SectionLayout from "@/app/components/section-layout";
import PlacesPageColumn from "@/app/components/places-page/column";

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
        <div className="flex justify-between">
          <PlacesPageColumn
            title={postData.placeFields.gettingThere.title}
            description={postData.placeFields.gettingThere.description}
          />
          <PlacesPageColumn
            title={postData.placeFields.makeABooking.heading}
            description={postData.placeFields.makeABooking.description}
          />
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
