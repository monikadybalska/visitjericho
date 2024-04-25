import ColumnsWithCards from "@/app/_components/layouts/columns-with-cards";
import { getPackagesPageBenefits } from "@/app/_lib/api";
import { colors } from "@material-tailwind/react/types/generic";

export default async function Benefits({ color }: { color: colors }) {
  const benefits = await getPackagesPageBenefits();
  return (
    benefits && (
      <>
        <h2 className="font-serif">{benefits.title}</h2>
        <ColumnsWithCards color={color} cards={benefits.cards} />
      </>
    )
  );
}
