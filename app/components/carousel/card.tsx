import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "../exports";

import Image from "next/image";

import { Providers } from "@/app/providers";
import { color } from "@material-tailwind/react/types/components/alert";

export default function CardDefault({
  title,
  image,
  description,
  color,
}: {
  title: string;
  image: string | undefined;
  description: string;
  color: color | undefined;
}) {
  return (
    <Providers>
      <Card className="mt-6 p-4 flex flex-1 gap-3" color={color}>
        {image && (
          <CardHeader className="h-56 shadow-none rounded-md m-0 p-0">
            <Image
              src={image}
              alt="card-image"
              fill
              className="object-cover object-center"
            />
          </CardHeader>
        )}
        <CardBody className="p-0">
          <Typography variant="h5" color="black" className="font-serif text-lg">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </CardBody>
        <CardFooter className="p-0">
          <Button
            variant="text"
            color="black"
            size="md"
            className="p-0"
            ripple={false}
          >
            Learn more →
          </Button>
        </CardFooter>
      </Card>
    </Providers>
  );
}
