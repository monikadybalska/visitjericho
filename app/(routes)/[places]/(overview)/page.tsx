import {
  getMorePlacesPagesPreviews,
  getPlacesPageHeader,
  getPlacesPageDescription,
} from "@/app/_lib/api";

import SectionLayout from "../../../_components/layouts/section-layout";
import Header from "../../_components/header";
import Listings from "./_components/listings";
import MorePlacesPages from "./_components/more-places-pages";
import Description from "../../_components/description";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function Places({
  params,
}: {
  params: { places: string };
}) {
  return (
    <>
      <Header slug={params.places} query={getPlacesPageHeader} />
      <Description slug={params.places} query={getPlacesPageDescription} />
      <SectionLayout>
        <Listings
          slug={params.places}
          color={params.places === "meet-the-local-people" ? "pink" : "yellow"}
        />
      </SectionLayout>
      {params.places !== "meet-the-local-people" && (
        <SectionLayout>
          <MorePlacesPages
            slug={params.places}
            query={getMorePlacesPagesPreviews}
            color="yellow"
          />
        </SectionLayout>
      )}
    </>
  );
}
