import CategoryPreview from "./category";
import SubcategoryPreview from "./subcategory";
import PackagesPreviews from "./packages-previews";
import { getBookATourCategoryPreview } from "@/lib/api";

export default function BookATour() {
  return (
    <CategoryPreview name="Book a tour" color="orange">
      <SubcategoryPreview slug="packages" query={getBookATourCategoryPreview}>
        <PackagesPreviews />
      </SubcategoryPreview>
    </CategoryPreview>
  );
}
