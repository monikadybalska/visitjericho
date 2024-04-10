import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "../exports";

import Image from "next/image";
import Link from "next/link";

import { Providers } from "@/app/providers";
import { color } from "@material-tailwind/react/types/components/alert";
import { Preview } from "@/lib/types";

export default function CardDefault({
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
        {thumbnail.node.mediaItemUrl && (
          <CardHeader className="min-w-48 shadow-none rounded-md m-0 p-0">
            <Image
              src={thumbnail.node.mediaItemUrl}
              alt=""
              // fill
              width={582}
              height={386}
              className="w-full h-auto"
              sizes="(max-width: 720px) 582px, (max-width: 960px) 300px, 200px"
            />
          </CardHeader>
        )}
        <CardBody className="p-0 flex flex-col gap-3">
          <h4 className="font-serif text-xl sm:text-2xl">{title}</h4>
          <p>{description}</p>
        </CardBody>
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
      </Card>
    </Providers>
  );
}
