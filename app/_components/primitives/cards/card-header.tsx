import { CardHeader as CardHeaderMT } from "../../exports";

import Image from "next/image";

import { Image as Thumbnail } from "@/app/_lib/types";
import cloudfrontLoader from "../../../../cloudfrontLoader";

export default function CardHeader({
  thumbnail,
  fullwidth,
}: {
  thumbnail?: Thumbnail;
  fullwidth?: boolean;
}) {
  return (
    <>
      {thumbnail && (
        <CardHeaderMT
          className="min-w-48 shadow-none rounded-md mt-4 mx-4"
          floated={false}
        >
          <Image
            src={thumbnail.node.mediaItemUrl}
            alt=""
            width={fullwidth ? 1248 : 582}
            height={fullwidth ? 429 : 386}
            className="w-full h-auto"
            sizes={
              fullwidth
                ? "(max-width: 500px) 300px, (max-width: 720px) 500px, (max-width: 960px) 800px, 1248px"
                : "(max-width: 600px) 400px, (max-width: 720px) 200px, 100px"
            }
          />
        </CardHeaderMT>
      )}
    </>
  );
}
