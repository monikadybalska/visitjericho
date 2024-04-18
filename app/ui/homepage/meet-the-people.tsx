import CategoryPreview from "./category";
import SubcategoryPreview from "./subcategory";
import PlacesPreviews from "./places-previews";

export default function MeetThePeople() {
  return (
    <CategoryPreview slug="meet-the-people">
      <SubcategoryPreview slug="meet-the-local-people">
        <PlacesPreviews slug="meet-the-local-people" />
      </SubcategoryPreview>
    </CategoryPreview>
  );
}
