import CategoryPreview from "./category";
import SubcategoryPreview from "./subcategory";
import PlacesPreviews from "./places-previews";
import { getPlacesCategoryPreview } from "@/lib/api";

export default function MeetThePeople() {
  return (
    <CategoryPreview name="Meet the people" color="pink">
      <SubcategoryPreview
        slug="meet-the-local-people"
        query={getPlacesCategoryPreview}
      >
        <PlacesPreviews slug="meet-the-local-people" />
      </SubcategoryPreview>
    </CategoryPreview>
  );
}
