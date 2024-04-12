import { getPackagesPreviews } from "@/lib/api";
import ProductCard from "../../primitives/cards/product-card";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function Packages() {
  const data = await getPackagesPreviews();

  return (
    <>
      {data && (
        <div className="flex flex-row gap-4 items-end">
          <ProductCard
            title={data.package1.title}
            description={data.package1.description}
            cta={data.package2.cta}
            color={data.color}
          />
          <ProductCard
            title={data.package2.title}
            description={data.package2.description}
            cta={data.package2.cta}
            main
            color={data.color}
          />
          <ProductCard
            title={data.package1.title}
            description={data.package3.description}
            cta={data.package2.cta}
            color={data.color}
          />
        </div>
      )}
    </>
  );
}
