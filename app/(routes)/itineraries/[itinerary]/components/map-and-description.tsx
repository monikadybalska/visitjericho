import { getItineraryMapAndDescription } from "@/lib/api";
import SectionLayout from "../../../../components/layouts/section-layout";
import ColumnsLayout from "../../../../components/layouts/columns-layout";
import Column from "../../../../components/layouts/column";
import DirectionsMap from "./directions-map";

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
            <div dangerouslySetInnerHTML={{ __html: `${data.description}` }} />
          </SectionLayout>
        )}
      </Column>
    </ColumnsLayout>
  );
}
