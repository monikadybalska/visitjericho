import CategoryPreview from "./category";
import SubcategoryPreview from "./subcategory";
import PlacesPreviews from "./places-previews";
import { Suspense } from "react";
import ThreeCardsSkeleton from "../skeletons/three-cards";

export default function SeeAndDo() {
  return (
    <CategoryPreview slug="see-and-do">
      <SubcategoryPreview slug="sights">
        <Suspense fallback={<ThreeCardsSkeleton />}>
          <PlacesPreviews slug="sights" />
        </Suspense>
      </SubcategoryPreview>
      <SubcategoryPreview slug="nature">
        <Suspense fallback={<ThreeCardsSkeleton />}>
          <PlacesPreviews slug="nature" />
        </Suspense>
      </SubcategoryPreview>
      <SubcategoryPreview slug="food">
        <Suspense fallback={<ThreeCardsSkeleton />}>
          <PlacesPreviews slug="food" />
        </Suspense>
      </SubcategoryPreview>
      <SubcategoryPreview slug="accommodation">
        <Suspense fallback={<ThreeCardsSkeleton />}>
          <PlacesPreviews slug="accommodation" />
        </Suspense>
      </SubcategoryPreview>
    </CategoryPreview>
  );
}
