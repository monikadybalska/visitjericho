import CategoryPreview from "./sections/category";
import SubcategoryPreview from "./sections/subcategory";
import CarouselItineraries from "./cards/carousel-itineraries";
import Practicalities from "./cards/practicalities";

export default async function PlanYourTravel() {
  return (
    <CategoryPreview slug="plan-your-travel">
      <SubcategoryPreview slug="practicalities">
        <Practicalities />
      </SubcategoryPreview>
      <SubcategoryPreview slug="itineraries">
        <CarouselItineraries />
      </SubcategoryPreview>
    </CategoryPreview>
  );
}
