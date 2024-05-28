import { getItineraryDirections } from "@/app/_lib/api";
import SectionLayout from "../../../../_components/layouts/section-layout";
import Column from "../../../../_components/layouts/column";
import Map from "../../../_components/map";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function Directions({ slug }: { slug: string }) {
  const data = await getItineraryDirections(slug);

  return (
    <Column>
      {data?.mapURL && (
        <SectionLayout>
          <Map mapURL={data.mapURL} />
        </SectionLayout>
      )}
    </Column>
  );
}
