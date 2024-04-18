import CategoryPreview from "./category";
import SubcategoryPreview from "./subcategory";
import ItinerariesPreviews from "./itineraries-previews";
import PracticalitiesPreviews from "./practicalities-previews";

export default function PlanYourTravel() {
  return (
    <CategoryPreview slug="plan-your-travel">
      <SubcategoryPreview slug="practicalities">
        <PracticalitiesPreviews />
      </SubcategoryPreview>
      <SubcategoryPreview slug="itineraries">
        <ItinerariesPreviews />
      </SubcategoryPreview>
    </CategoryPreview>
  );
}
