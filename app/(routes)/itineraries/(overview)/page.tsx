import { getItinerariesPageHeader } from "@/app/_lib/api";

import Header from "../../_components/header";
import Listings from "./_components/listings";
import SectionLayout from "../../../_components/layouts/section-layout";

export default function Itineraries() {
  return (
    <>
      <Header slug="itineraries" query={getItinerariesPageHeader} />
      <SectionLayout>
        <Listings color="green" />
      </SectionLayout>
    </>
  );
}
