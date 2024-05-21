import Image from "next/image";
import { SubcategoryPageHeader } from "@/app/_lib/types";
import HeroButton from "@/app/_components/primitives/buttons/hero-button";

export default async function Header({
  slug,
  query,
}: {
  slug: string;
  query: (slug: string) => Promise<SubcategoryPageHeader | null>;
}) {
  const header = await query(slug);

  return (
    header && (
      <div className="relative h-96 lg:h-[32rem] 3xl:h-[50rem] w-full overflow-y-hidden flex items-center justify-center">
        <div className="block">
          <Image
            src={header.image.node.mediaItemUrl}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center z-0"
            priority
          />
        </div>
        <div className="bg-white/80 flex justify-center px-5 py-8 md:px-20 z-10 relative">
          <div className="w-full max-w-screen-xl flex flex-col gap-6 z-20">
            <h1 className="font-serif">{header.title}</h1>
            <p>{header.subtitle}</p>
            <HeroButton href="/packages#packages" />
          </div>
        </div>
      </div>
    )
  );
}
