import CategoryPreview from "./category";
import SubcategoryPreview from "./subcategory";
import PackagesPreviews from "./packages-previews";
import { getBookATourCategoryPreview } from "@/lib/api";

export default function PlanYourTravel() {
  return (
    <CategoryPreview slug="book-a-tour">
      <SubcategoryPreview slug="packages" query={getBookATourCategoryPreview}>
        <PackagesPreviews />
      </SubcategoryPreview>
    </CategoryPreview>
  );
}
