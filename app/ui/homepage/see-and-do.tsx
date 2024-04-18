import CategoryPreview from "./category";
import SubcategoryPreview from "./subcategory";
import PlacesPreviews from "./places-previews";

export default function SeeAndDo() {
  return (
    <CategoryPreview slug="see-and-do">
      <SubcategoryPreview slug="sights">
        <PlacesPreviews slug="sights" />
      </SubcategoryPreview>
      <SubcategoryPreview slug="nature">
        <PlacesPreviews slug="nature" />
      </SubcategoryPreview>
      <SubcategoryPreview slug="food">
        <PlacesPreviews slug="food" />
      </SubcategoryPreview>
      <SubcategoryPreview slug="accommodation">
        <PlacesPreviews slug="accommodation" />
      </SubcategoryPreview>
    </CategoryPreview>
  );
}
