import { getItineraryMapAndDescription } from "@/lib/api";
import SectionLayout from "../../layouts/section-layout";
import ColumnsLayout from "../../layouts/columns-layout";
import Column from "../../layouts/column";
import DirectionsMap from "./directions-map";
import PostDescription from "./description";

export default async function MapAndDescription({ slug }: { slug: string }) {
  const data = await getItineraryMapAndDescription(slug);

  return (
    <ColumnsLayout>
      <Column>
        {data?.mapURL && (
          <SectionLayout>
            <DirectionsMap mapURL={data.mapURL} />
          </SectionLayout>
        )}
      </Column>
      <Column>
        {data?.description && (
          <SectionLayout>
            <PostDescription description={data.description} />
          </SectionLayout>
        )}
      </Column>
    </ColumnsLayout>
  );
}
