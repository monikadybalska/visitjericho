import CategoryPreview from "./category";
import SubcategoryPreview from "./subcategory";
import PlacesPreviews from "./places-previews";
import { getPlacesPagePreview } from "@/app/_lib/api";
import { Suspense } from "react";
import ThreeCardsSkeleton from "../skeletons/three-cards";

export default function MeetThePeople() {
  return (
    <CategoryPreview name="Meet the people" color="pink">
      <SubcategoryPreview
        slug="meet-the-local-people"
        query={getPlacesPagePreview}
      >
        <Suspense fallback={<ThreeCardsSkeleton />}>
          <PlacesPreviews slug="meet-the-local-people" color="pink" />
        </Suspense>
      </SubcategoryPreview>
    </CategoryPreview>
  );
}
