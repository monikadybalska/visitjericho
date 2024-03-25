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

export default function PricingPreview() {
  return (
    <Providers>
      <div className="grid grid-cols-3 gap-4 pr-3">
        <Card className="mt-6 p-4 flex flex-1 gap-3" color="orange">
          <CardBody className="p-0">
            <Typography
              variant="h5"
              color="black"
              className="font-serif text-lg"
            >
              Standard Package
            </Typography>
            <Typography>Description</Typography>
          </CardBody>
          <CardFooter className="p-0 flex justify-center">
            <Button variant="outlined" color="orange" ripple={false}>
              Book now
            </Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 p-4 flex flex-1 gap-3" color="orange">
          <CardBody className="p-0">
            <Typography
              variant="h5"
              color="black"
              className="font-serif text-lg"
            >
              Standard Package
            </Typography>
            <Typography>Description</Typography>
          </CardBody>
          <CardFooter className="p-0 flex justify-center">
            <Button variant="outlined" color="orange" ripple={false}>
              Book now
            </Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 p-4 flex flex-1 gap-3" color="orange">
          <CardBody className="p-0">
            <Typography
              variant="h5"
              color="black"
              className="font-serif text-lg"
            >
              Standard Package
            </Typography>
            <Typography>Description</Typography>
          </CardBody>
          <CardFooter className="p-0 flex justify-center">
            <Button variant="outlined" color="orange" ripple={false}>
              Book now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Providers>
  );
}
