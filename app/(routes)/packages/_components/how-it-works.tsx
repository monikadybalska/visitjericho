import { getPackagesPageHowItWorks } from "@/app/_lib/api";
import { StepperDefault } from "./stepper-default";
import { colors } from "@material-tailwind/react/types/generic";

export default async function HowItWorks({ color }: { color: colors }) {
  const data = await getPackagesPageHowItWorks();

  return (
    data && (
      <>
        <h2 className="font-serif">{data.title}</h2>
        <div className="w-full px-10 lg:px-20 pt-4 pb-36">
          <StepperDefault color={color} steps={data.steps} />
        </div>
      </>
    )
  );
}
