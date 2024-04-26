import { getPracticalitiesPreviews } from "@/app/_lib/api";

import CardDefault from "../primitives/cards/card-default";
import { colors } from "@material-tailwind/react/types/generic";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function PracticalitiesPreviews({
  color,
}: {
  color: colors;
}) {
  const practicalities = await getPracticalitiesPreviews();

  return (
    <>
      {practicalities && (
        <div className="flex flex-row gap-4">
          <CardDefault
            title={practicalities.gettingThere.title}
            description={practicalities.gettingThere.description}
            color={color}
          />
          <CardDefault
            title={practicalities.tips.title}
            description={practicalities.tips.description}
            color={color}
          />
        </div>
      )}
    </>
  );
}
