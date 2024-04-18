import CardDefault from "../primitives/cards/card-default";
import { getPracticalitiesPreviews } from "@/lib/api";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function PracticalitiesPreviews() {
  const data = await getPracticalitiesPreviews();

  return (
    <>
      {data && (
        <div className="flex flex-row gap-4">
          <CardDefault
            title={data.gettingThere.title}
            description={data.gettingThere.description}
            color={data.color}
          />
          <CardDefault
            title={data.tips.title}
            description={data.tips.description}
            color={data.color}
          />
        </div>
      )}
    </>
  );
}
