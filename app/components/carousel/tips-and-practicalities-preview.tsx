import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "../exports";

import { Providers } from "@/app/providers";

export default function TipsAndPracticalitiesPreview() {
  return (
    <Providers>
      <section className="w-full max-w-screen-xl pt-14">
        <div className="w-full flex justify-between">
          <h3 className="font-serif text-2xl sm:text-[2rem] basis-1/2">
            Check out our tips and practicalities
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
          <Card className="mt-6 p-4 flex flex-1 gap-3" color="green">
            <CardBody className="p-0">
              <h4 className="font-serif text-xl sm:text-2xl">Getting there</h4>
              <p>Description</p>
            </CardBody>
            <CardFooter className="p-0 flex justify-center">
              <Button
                variant="text"
                color="black"
                size="md"
                className="p-0 font-[400]"
                ripple={false}
              >
                Learn more →
              </Button>
            </CardFooter>
          </Card>
          <Card className="mt-6 p-4 flex flex-1 gap-3" color="green">
            <CardBody className="p-0">
              <h4 className="font-serif text-xl sm:text-2xl">Tips</h4>
              <p>Description</p>
            </CardBody>
            <CardFooter className="p-0 flex justify-center">
              <Button
                variant="text"
                color="black"
                size="md"
                className="p-0 font-[400]"
                ripple={false}
              >
                Learn more →
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </Providers>
  );
}
