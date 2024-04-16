import { SubcategoryPage } from "@/lib/types";
import Image from "next/image";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function SubcategoryHero({
  image,
  title,
  subtitle,
}: SubcategoryPage) {
  return (
    <div className="relative h-96 lg:h-[32rem] 3xl:h-[50rem] w-full overflow-y-hidden flex items-center justify-center">
      <div className="block">
        <Image
          src={image.node.mediaItemUrl}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center z-0"
          priority
        />
      </div>
      <div className="bg-white/80 flex justify-center px-5 py-8 md:px-20 z-10 relative">
        <div className="w-full max-w-screen-xl flex flex-col gap-6 z-20">
          <h1 className="font-serif">{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
