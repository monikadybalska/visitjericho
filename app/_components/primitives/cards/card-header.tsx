import { CardHeader as CardHeaderMT } from "../../exports";

import Image from "next/image";

import { Image as Thumbnail } from "@/app/_lib/types";

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
            className={`w-full h-auto ${!fullwidth && "md:hidden"}`}
          />
          {!fullwidth && (
            <Image
              src={thumbnail.node.mediaItemUrl.replace(".jpg", "-384x255.jpg")}
              alt=""
              width={fullwidth ? 1248 : 384}
              height={fullwidth ? 429 : 255}
              className="w-full h-auto hidden md:block"
            />
          )}
        </CardHeaderMT>
      )}
    </>
  );
}
