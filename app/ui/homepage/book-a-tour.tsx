import CategoryPreview from "./category";
import SubcategoryPreview from "./subcategory";
import PackagesPreviews from "./packages-previews";

export default function PlanYourTravel() {
  return (
    <CategoryPreview slug="book-a-tour">
      <SubcategoryPreview slug="packages">
        <PackagesPreviews />
      </SubcategoryPreview>
    </CategoryPreview>
  );
}
