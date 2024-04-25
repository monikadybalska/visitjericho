import CategoryPreview from "./category";
import SubcategoryPreview from "./subcategory";
import ItinerariesPreviews from "./itineraries-previews";
import PracticalitiesPreviews from "./practicalities-previews";
import {
  getItinerariesPagePreview,
  getPracticalitiesPagePreview,
} from "@/app/_lib/api";
import { Suspense } from "react";
import ThreeCardsSkeleton from "../skeletons/three-cards";

export default function PlanYourTravel() {
  return (
    <CategoryPreview name="Plan your travel" color="green">
      <SubcategoryPreview
        slug="practicalities"
        query={getPracticalitiesPagePreview}
      >
        <Suspense fallback={<ThreeCardsSkeleton />}>
          <PracticalitiesPreviews color="green" />
        </Suspense>
      </SubcategoryPreview>
      <SubcategoryPreview slug="itineraries" query={getItinerariesPagePreview}>
        <Suspense fallback={<ThreeCardsSkeleton />}>
          <ItinerariesPreviews color="green" />
        </Suspense>
      </SubcategoryPreview>
    </CategoryPreview>
  );
}
