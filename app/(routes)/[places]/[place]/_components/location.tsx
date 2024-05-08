import { getPlaceLocation } from "@/app/_lib/api";
import Map from "../../../_components/map";
import Column from "@/app/_components/layouts/column";
import SectionLayout from "@/app/_components/layouts/section-layout";

export default async function Location({ slug }: { slug: string }) {
  const location = await getPlaceLocation(slug);
  return (
    <Column>
      {location && (
        <SectionLayout>
          {location.title && <h2 className="font-serif">{location.title}</h2>}
          {location.map && <Map mapURL={location.map} />}
          {location.description && <p>{location.description}</p>}
        </SectionLayout>
      )}
    </Column>
  );
}
