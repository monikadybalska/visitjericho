import { getPlace, getPlacesPreviews } from "@/lib/api";

import PostHeader from "../../../ui/subcategories/posts/header";
import PostDescription from "../../../ui/subcategories/posts/description";
import SectionLayout from "../../../ui/layouts/section-layout";
import ColumnsLayout from "../../../ui/layouts/columns-layout";
import Column from "../../../ui/layouts/column";
import MoreItems from "../../../ui/subcategories/more-items";

export default async function Page({
  params,
}: {
  params: { places: string; place: string };
}) {
  const postData = await getPlace(params.place);
  const morePlaces = await getPlacesPreviews("sights");

  return (
    <>
      <PostHeader image={postData.placeFields.image} />
      <SectionLayout>
        <PostDescription
          title={postData.title}
          description={postData.content}
        />
      </SectionLayout>
      <ColumnsLayout>
        <Column>
          <SectionLayout>
            <h2 className="font-serif">
              {postData.placeFields.gettingThere.title}
            </h2>
            <p>{postData.placeFields.gettingThere.description}</p>
          </SectionLayout>
        </Column>
        <Column>
          <SectionLayout>
            <h2 className="font-serif">
              {postData.placeFields.makeABooking.heading}
            </h2>
            <p>{postData.placeFields.makeABooking.description}</p>
          </SectionLayout>
        </Column>
      </ColumnsLayout>
      <SectionLayout>
        <MoreItems
          slug={params.places}
          title="See more places"
          color="yellow"
          cards={
            morePlaces
              ? morePlaces.places.filter((place) => place.slug !== params.place)
              : null
          }
        />
      </SectionLayout>
    </>
  );
}
