import ColumnsWithCards from "@/app/_components/layouts/columns-with-cards";
import { getPracticalitiesPageDirections } from "@/app/_lib/api";
import { colors } from "@material-tailwind/react/types/generic";

export default async function GettingThere({ color }: { color: colors }) {
  const data = await getPracticalitiesPageDirections();
  return (
    data && (
      <>
        <h2 className="font-serif">{data.title}</h2>
        <ColumnsWithCards color={color} cards={data.cards} />
      </>
    )
  );
}
