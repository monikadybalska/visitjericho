import { getPackagesPreviews } from "@/app/_lib/api";

import { colors } from "@material-tailwind/react/types/generic";
import PackagesCarousel from "@/app/(routes)/packages/_components/packages-carousel";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function PackagesPreviews({ color }: { color: colors }) {
  const packages = await getPackagesPreviews();

  return (
    packages && (
      <PackagesCarousel color="orange" packages={packages} variant="filled" />
    )
  );
}
