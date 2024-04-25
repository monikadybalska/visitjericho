import { getPackagesPagePackages } from "@/app/_lib/api";
import {
  CarouselContainer,
  CarouselItem,
} from "@/app/_components/primitives/carousel/carousel";
import CardDefault from "@/app/_components/primitives/cards/card-default";
import { colors } from "@material-tailwind/react/types/generic";

export default async function Packages({ color }: { color: colors }) {
  const packages = await getPackagesPagePackages();

  return (
    packages && (
      <>
        <h2 className="font-serif">{packages.title}</h2>
        <CarouselContainer color={color}>
          {packages.packages.map((card, i) => (
            <CarouselItem
              key={i}
              className="basis-full lg:flex lg:basis-1/3 lg:items-end"
            >
              <CardDefault
                title={card.title}
                description={card.description}
                color={color}
                cta={card.cta}
                slug="/packages"
                // @ts-ignore: Incompatible module types
                variant="outlined" // eslint-disable-line
                buttonVariant={i === 1 ? "filled" : "outlined"}
              />
            </CarouselItem>
          ))}
        </CarouselContainer>
      </>
    )
  );
}
