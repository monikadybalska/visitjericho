import { Card, CardHeader, CardBody, CardFooter, Button } from "../../exports";

import Image from "next/image";

import { Providers } from "@/app/providers";
import { Preview } from "@/lib/types";

export default function ProductCard({
  title,
  thumbnail,
  description,
  cta,
  color,
  main,
}: Omit<Preview, "priority"> & { main?: boolean }) {
  return (
    <Providers>
      <Card className="mt-6 p-4 flex flex-1 gap-3 h-fit" color={color}>
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
