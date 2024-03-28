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
      <section className="relative flex w-full justify-center flex-col overflow-visible my-16">
        <div
          role="label"
          className={`bg-orange-light pl-5 py-2 sm:pl-20 items-center flex w-2/5 rounded-r-md absolute top-0 h-8`}
        ></div>
        <div className="flex flex-col w-full items-center px-5 sm:px-20 z-10">
          <h2 className="uppercase flex max-w-screen-xl w-full text-base font-medium py-1">
            Book a tour
          </h2>
          <section className="w-full max-w-screen-xl pt-14">
            <div className="w-full flex justify-between">
              <h3 className="font-serif text-2xl sm:text-[2rem] basis-1/2">
                Learn from local guides with our tour packages
              </h3>
              <Button
                variant="text"
                color="black"
                className="p-0 hover:underline hover:bg-transparent text-md font-medium"
                ripple={false}
              >
                Learn more →
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Card className="mt-6 p-4 flex flex-1 gap-3" color="orange">
                <CardBody className="p-0">
                  <h4 className="font-serif text-xl sm:text-2xl">
                    Standard Package
                  </h4>
                  <p>Description</p>
                </CardBody>
                <CardFooter className="p-0 flex justify-center">
                  <Button
                    variant="outlined"
                    size="md"
                    color="orange"
                    className="font-medium"
                    ripple={false}
                  >
                    Book now
                  </Button>
                </CardFooter>
              </Card>
              <Card className="mt-6 p-4 flex flex-1 gap-3" color="orange">
                <CardBody className="p-0">
                  <h4 className="font-serif text-xl sm:text-2xl">
                    Premium Package
                  </h4>
                  <p>Description</p>
                </CardBody>
                <CardFooter className="p-0 flex justify-center">
                  <Button
                    variant="filled"
                    size="md"
                    color="orange"
                    className="font-medium"
                    ripple={false}
                  >
                    Book now
                  </Button>
                </CardFooter>
              </Card>
              <Card className="mt-6 p-4 flex flex-1 gap-3" color="orange">
                <CardBody className="p-0">
                  <h4 className="font-serif text-xl sm:text-2xl">
                    Bespoke Package
                  </h4>
                  <p>Description</p>
                </CardBody>
                <CardFooter className="p-0 flex justify-center">
                  <Button
                    variant="outlined"
                    size="md"
                    color="orange"
                    className="font-medium"
                    ripple={false}
                  >
                    Book now
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>
        </div>
      </section>
    </Providers>
  );
}
