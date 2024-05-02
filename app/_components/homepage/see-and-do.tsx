import CategoryPreview from "./category";
import SubcategoryPreview from "./subcategory";
import PlacesPreviews from "./places-previews";
import { Suspense } from "react";
import ThreeCardsSkeleton from "../skeletons/three-cards";
import { getPlacesPagePreview } from "@/app/_lib/api";
import Mosaic from "../skeletons/mosaic";

export default function SeeAndDo() {
  return (
    <CategoryPreview name="See and do" color="yellow">
      <SubcategoryPreview slug="sights" query={getPlacesPagePreview}>
        <Suspense fallback={<ThreeCardsSkeleton />}>
          <PlacesPreviews slug="sights" color="yellow" />
        </Suspense>
      </SubcategoryPreview>
      <SubcategoryPreview slug="nature" query={getPlacesPagePreview}>
        <Suspense fallback={<ThreeCardsSkeleton />}>
          <PlacesPreviews slug="nature" color="yellow" />
        </Suspense>
      </SubcategoryPreview>
      <SubcategoryPreview slug="food" query={getPlacesPagePreview}>
        <Suspense fallback={<ThreeCardsSkeleton />}>
          <PlacesPreviews slug="food" color="yellow" />
        </Suspense>
      </SubcategoryPreview>
      <SubcategoryPreview slug="accommodation" query={getPlacesPagePreview}>
        <Suspense fallback={<ThreeCardsSkeleton />}>
          <PlacesPreviews slug="accommodation" color="yellow" />
        </Suspense>
      </SubcategoryPreview>
    </CategoryPreview>
  );
}
