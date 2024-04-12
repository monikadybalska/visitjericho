import CategoryPreview from "./sections/category";
import SubcategoryPreview from "./sections/subcategory";
import Packages from "./cards/packages";

export default async function PlanYourTravel() {
  return (
    <CategoryPreview slug="book-a-tour">
      <SubcategoryPreview slug="packages">
        <Packages />
      </SubcategoryPreview>
    </CategoryPreview>
  );
}
