import { Card, CardHeader, CardBody, CardFooter, Button } from "../../exports";

import Image from "next/image";

import { Providers } from "@/app/providers";
import { Preview } from "@/lib/types";

export default function ProductCardOutlined({
  title,
  thumbnail,
  description,
  cta,
  color,
  main,
}: Omit<Preview, "priority"> & { main?: boolean }) {
  const colorVariants: {
    [colorName: string]: string;
  } = {
    yellow:
      "border-yellow-light shadow-[9px_9px_0_0_rgba(0,0,0,1)] shadow-yellow-light hover:shadow-yellow-light",
    green:
      "border-green-light shadow-[9px_9px_0_0_rgba(0,0,0,1)] shadow-green-light hover:shadow-green-light",
    pink: "border-pink-light shadow-[9px_9px_0_0_rgba(0,0,0,1)] shadow-pink-light hover:shadow-pink-light",
    orange:
      "border-orange-light shadow-[9px_9px_0_0_rgba(0,0,0,1)] shadow-orange-light hover:shadow-orange-light",
  };
  return (
    <Providers>
      <Card
        className={
          color
            ? `h-fit p-4 flex flex-1 gap-3 bg-white border ${colorVariants[color]}`
            : `h-fit p-4 flex flex-1 gap-3 bg-white border`
        }
      >
        {thumbnail && (
          <CardHeader className="min-w-48 shadow-none rounded-md m-0 p-0">
            <Image
              src={thumbnail.node.mediaItemUrl}
              alt=""
              width={582}
              height={386}
              className="w-full h-auto"
              sizes="(max-width: 720px) 582px, (max-width: 960px) 300px, 200px"
            />
          </CardHeader>
        )}
        <CardBody className="p-0 flex flex-col gap-3">
          <h4 className="font-serif text-xl sm:text-2xl">{title}</h4>
          <ul
            className="list-disc list-inside"
            dangerouslySetInnerHTML={{ __html: `${description}` }}
          ></ul>
        </CardBody>
        {cta && (
          <CardFooter className="p-0 flex items-center justify-center">
            <Button
              variant={main ? "filled" : "outlined"}
              color={color}
              size="md"
              ripple={false}
              className="font-medium"
            >
              {cta}
            </Button>
          </CardFooter>
        )}
      </Card>
    </Providers>
  );
}
