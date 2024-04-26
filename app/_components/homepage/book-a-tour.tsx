import CategoryPreview from "./category";
import SubcategoryPreview from "./subcategory";
import PackagesPreviews from "./packages-previews";
import { getBookATourPagePreview } from "@/app/_lib/api";
import { Suspense } from "react";
import ThreeCardsSkeleton from "../skeletons/three-cards";

export default function BookATour() {
  return (
    <CategoryPreview name="Book a tour" color="orange">
      <SubcategoryPreview slug="packages" query={getBookATourPagePreview}>
        <Suspense fallback={<ThreeCardsSkeleton />}>
          <PackagesPreviews color="orange" />
        </Suspense>
      </SubcategoryPreview>
    </CategoryPreview>
  );
}
