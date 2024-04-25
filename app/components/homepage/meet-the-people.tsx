import CategoryPreview from "./category";
import SubcategoryPreview from "./subcategory";
import PlacesPreviews from "./places-previews";
import { getPlacesCategoryPreview } from "@/lib/api";
import { Suspense } from "react";
import ThreeCardsSkeleton from "../skeletons/three-cards";

export default function MeetThePeople() {
  return (
    <CategoryPreview name="Meet the people" color="pink">
      <SubcategoryPreview
        slug="meet-the-local-people"
        query={getPlacesCategoryPreview}
      >
        <Suspense fallback={<ThreeCardsSkeleton />}>
          <PlacesPreviews slug="meet-the-local-people" />
        </Suspense>
      </SubcategoryPreview>
    </CategoryPreview>
  );
}
