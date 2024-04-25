import { Image as ImageType } from "@/app/_lib/types";
import Image from "next/image";

export default async function ListingHeader({
  slug,
  query,
}: {
  slug: string;
  query: (slug: string) => Promise<ImageType | null>;
}) {
  const image = await query(slug);

  return (
    image && (
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
      </div>
    )
  );
}
