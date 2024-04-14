import { Card, CardHeader, CardBody, CardFooter, Button } from "../../exports";

import Image from "next/image";
import Link from "next/link";

import { Providers } from "@/app/providers";
import { Preview } from "@/lib/types";

export default function CardFullwidth({
  slug,
  title,
  thumbnail,
  description,
  cta,
  color,
}: Omit<Preview, "priority">) {
  return (
    <Providers>
      <Card className="mt-6 p-4 flex flex-1 gap-3" color={color}>
        {thumbnail && (
          <CardHeader className="min-w-48 shadow-none rounded-md m-0 p-0">
            <Image
              src={thumbnail.node.mediaItemUrl}
              alt=""
              width={1248}
              height={429}
              className="w-full h-auto"
              sizes="(max-width: 720px) 300px, (max-width: 960px) 800px, 1248px"
            />
          </CardHeader>
        )}
        <CardBody className="p-0 flex flex-col gap-3">
          <h4 className="font-serif text-xl sm:text-2xl">{title}</h4>
          <p>{description}</p>
        </CardBody>
        {cta && slug && (
          <CardFooter className="p-0">
            <Link href={slug}>
              <Button
                variant="text"
                color="black"
                size="md"
                className="p-0 font-[400]"
                ripple={false}
              >
                {cta}
              </Button>
            </Link>
          </CardFooter>
        )}
      </Card>
    </Providers>
  );
}
