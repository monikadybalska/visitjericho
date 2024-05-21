import { getPackagesPagePackages } from "@/app/_lib/api";
import { colors } from "@material-tailwind/react/types/generic";

import PackagesCarousel from "./packages-carousel";

export default async function Packages({ color }: { color: colors }) {
  const packages = await getPackagesPagePackages();

  return (
    packages && (
      <>
        <h2 className="font-serif">{packages.title}</h2>
        <PackagesCarousel
          color={color}
          packages={packages.packages}
          // @ts-ignore: Incompatible module types
          variant="outlined" // eslint-disable-line
        />
      </>
    )
  );
}
