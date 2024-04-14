import { Card, CardHeader, CardBody, CardFooter, Button } from "../../exports";

import Image from "next/image";
import Link from "next/link";

import { Providers } from "@/app/providers";
import { color } from "@material-tailwind/react/types/components/alert";
import { Preview } from "@/lib/types";

export default function CardOutlinedFullwidth({
  slug,
  title,
  thumbnail,
  description,
  cta,
  color,
}: Omit<Preview, "priority">) {
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
            ? `mt-6 p-4 flex flex-1 gap-3 bg-white border ${colorVariants[color]}`
            : `mt-6 p-4 flex flex-1 gap-3 bg-white border`
        }
      >
        {thumbnail && (
          <CardHeader className="min-w-48 shadow-none rounded-md m-0 p-0">
            <Image
              src={thumbnail.node.mediaItemUrl}
              alt=""
              width={1248}
              height={429}
              className="w-full h-auto"
              sizes="(max-width: 720px) 582px, (max-width: 960px) 800px, 1248px"
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
