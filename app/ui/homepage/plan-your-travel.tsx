import CategoryPreview from "./category";
import SubcategoryPreview from "./subcategory";
import ItinerariesPreviews from "./itineraries-previews";
import PracticalitiesPreviews from "./practicalities-previews";
import {
  getItinerariesCategoryPreview,
  getPracticalitiesCategoryPreview,
} from "@/lib/api";

export default function PlanYourTravel() {
  return (
    <CategoryPreview name="Plan your travel" color="green">
      <SubcategoryPreview
        slug="practicalities"
        query={getPracticalitiesCategoryPreview}
      >
        <PracticalitiesPreviews />
      </SubcategoryPreview>
      <SubcategoryPreview
        slug="itineraries"
        query={getItinerariesCategoryPreview}
      >
        <ItinerariesPreviews />
      </SubcategoryPreview>
    </CategoryPreview>
  );
}
