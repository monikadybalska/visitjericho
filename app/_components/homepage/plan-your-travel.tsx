import CategoryPreview from "./category";
import SubcategoryPreview from "./subcategory";
import ItinerariesPreviews from "./itineraries-previews";
import PracticalitiesPreviews from "./practicalities-previews";
import {
  getItinerariesPagePreview,
  getPracticalitiesPagePreview,
} from "@/app/_lib/api";
import { Suspense } from "react";
import FullwidthImage from "../skeletons/fullwidth-image";
import TwoCardsSkeleton from "../skeletons/two-cards";

export default function PlanYourTravel() {
  return (
    <CategoryPreview name="Plan your travel" color="green">
      <SubcategoryPreview
        slug="practicalities"
        query={getPracticalitiesPagePreview}
      >
        <Suspense fallback={<TwoCardsSkeleton />}>
          <PracticalitiesPreviews color="green" />
        </Suspense>
      </SubcategoryPreview>
      <SubcategoryPreview slug="itineraries" query={getItinerariesPagePreview}>
        <Suspense fallback={<FullwidthImage />}>
          <ItinerariesPreviews color="green" />
        </Suspense>
      </SubcategoryPreview>
    </CategoryPreview>
  );
}
