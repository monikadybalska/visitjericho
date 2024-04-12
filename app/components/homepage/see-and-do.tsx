import CategoryPreview from "./sections/category";
import SubcategoryPreview from "./sections/subcategory";
import CarouselPlaces from "./cards/carousel-places";

export default async function SeeAndDo() {
  return (
    <CategoryPreview slug="see-and-do">
      <SubcategoryPreview slug="sights">
        <CarouselPlaces slug="sights" />
      </SubcategoryPreview>
      <SubcategoryPreview slug="nature">
        <CarouselPlaces slug="nature" />
      </SubcategoryPreview>
      <SubcategoryPreview slug="food">
        <CarouselPlaces slug="food" />
      </SubcategoryPreview>
      <SubcategoryPreview slug="accommodation">
        <CarouselPlaces slug="accommodation" />
      </SubcategoryPreview>
    </CategoryPreview>
  );
}
