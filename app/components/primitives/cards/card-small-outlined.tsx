import { Card, CardHeader, CardBody, CardFooter, Button } from "../../exports";

import SightsIcon from "../../icons/SightsIcon";

import { Providers } from "@/app/providers";
import { Preview } from "@/lib/types";

export default function CardSmallOutlined({
  title,
  description,
  color,
}: Omit<Preview, "priority">) {
  const colorVariants: {
    [colorName: string]: {
      border: string;
      icon: string;
    };
  } = {
    yellow: { border: "border-yellow-light", icon: "text-yellow" },
    green: { border: "border-green-light", icon: "text-green" },
    pink: { border: "border-pink-light", icon: "text-pink" },
    orange: { border: "border-orange-light", icon: "text-orange" },
  };
  return (
    <Providers>
      <Card
        className={
          color
            ? `pb-4 flex grow flex-1 bg-white border ${colorVariants[color].border} shadow-none hover:shadow-none`
            : `pb-4 flex grow flex-1 bg-white border`
        }
      >
        <CardHeader
          className={`min-w-48 shadow-none rounded-t-md rounded-b-none m-0 p-0 bg-${color}-light flex flex-row p-4`}
          floated={false}
        >
          <SightsIcon
            className={
              color
                ? `w-7 h-7 sm:w-8 sm:h-8 mr-2 ${colorVariants[color].icon} fill-current`
                : `w-7 h-7 sm:w-8 sm:h-8 mr-2 color-black fill-current`
            }
          />
          <h3 className="font-serif text-xl sm:text-2xl text-black">{title}</h3>
        </CardHeader>
        <CardBody className="flex flex-col gap-3 p-0 mt-4 mx-4">
          <div dangerouslySetInnerHTML={{ __html: `${description}` }}></div>
        </CardBody>
      </Card>
    </Providers>
  );
}
