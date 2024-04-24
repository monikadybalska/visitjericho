import CategoryPreview from "./category";
import SubcategoryPreview from "./subcategory";
import PlacesPreviews from "./places-previews";
import { Suspense } from "react";
import ThreeCardsSkeleton from "../skeletons/three-cards";
import { getPlacesCategoryPreview } from "@/lib/api";

export default function SeeAndDo() {
  return (
    <CategoryPreview slug="see-and-do">
      <SubcategoryPreview slug="sights" query={getPlacesCategoryPreview}>
        <Suspense fallback={<ThreeCardsSkeleton />}>
          <PlacesPreviews slug="sights" />
        </Suspense>
      </SubcategoryPreview>
      <SubcategoryPreview slug="nature" query={getPlacesCategoryPreview}>
        <Suspense fallback={<ThreeCardsSkeleton />}>
          <PlacesPreviews slug="nature" />
        </Suspense>
      </SubcategoryPreview>
      <SubcategoryPreview slug="food" query={getPlacesCategoryPreview}>
        <Suspense fallback={<ThreeCardsSkeleton />}>
          <PlacesPreviews slug="food" />
        </Suspense>
      </SubcategoryPreview>
      <SubcategoryPreview slug="accommodation" query={getPlacesCategoryPreview}>
        <Suspense fallback={<ThreeCardsSkeleton />}>
          <PlacesPreviews slug="accommodation" />
        </Suspense>
      </SubcategoryPreview>
    </CategoryPreview>
  );
}
