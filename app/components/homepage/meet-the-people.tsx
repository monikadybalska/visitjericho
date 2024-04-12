import CategoryPreview from "./sections/category";
import SubcategoryPreview from "./sections/subcategory";
import CarouselPlaces from "./cards/carousel-places";

export default async function MeetThePeople() {
  return (
    <CategoryPreview slug="meet-the-people">
      <SubcategoryPreview slug="meet-the-local-people">
        <CarouselPlaces slug="meet-the-local-people" />
      </SubcategoryPreview>
    </CategoryPreview>
  );
}
