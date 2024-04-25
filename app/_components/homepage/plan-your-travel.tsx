import CategoryPreview from "./category";
import SubcategoryPreview from "./subcategory";
import ItinerariesPreviews from "./itineraries-previews";
import PracticalitiesPreviews from "./practicalities-previews";
import {
  getItinerariesCategoryPreview,
  getPracticalitiesCategoryPreview,
} from "@/app/_lib/api";
import { Suspense } from "react";
import ThreeCardsSkeleton from "../skeletons/three-cards";

export default function PlanYourTravel() {
  return (
    <CategoryPreview name="Plan your travel" color="green">
      <SubcategoryPreview
        slug="practicalities"
        query={getPracticalitiesCategoryPreview}
      >
        <Suspense fallback={<ThreeCardsSkeleton />}>
          <PracticalitiesPreviews />
        </Suspense>
      </SubcategoryPreview>
      <SubcategoryPreview
        slug="itineraries"
        query={getItinerariesCategoryPreview}
      >
        <Suspense fallback={<ThreeCardsSkeleton />}>
          <ItinerariesPreviews />
        </Suspense>
      </SubcategoryPreview>
    </CategoryPreview>
  );
}
