import { getPackagesPage } from "@/lib/api";

import ColumnsWithCards from "../../ui/layouts/columns-with-cards";
import SectionLayout from "../../ui/layouts/section-layout";
import CardDefault from "../../ui/primitives/cards/card-default";
import {
  CarouselContainer,
  CarouselItem,
} from "../../ui/primitives/carousel/carousel";
import SubcategoryHero from "../../ui/subcategories/header";
import { StepperDefault } from "../../ui/primitives/stepper/stepper";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function Packages() {
  const category = await getPackagesPage();

  return (
    <>
      {category && (
        <>
          <SubcategoryHero
            image={category.image}
            title={category.title}
            subtitle={category.subtitle}
          />
          <SectionLayout>
            <h2 className="font-serif">{category.benefits.title}</h2>
            <ColumnsWithCards
              color={category.color}
              cards={category.benefits.cards}
            />
          </SectionLayout>
          <SectionLayout>
            <h2 className="font-serif">{category.howItWorks.title}</h2>
            <div className="w-full px-10 lg:px-20 pt-4 pb-36">
              <StepperDefault
                color={category.color}
                steps={category.howItWorks.steps}
              />
            </div>
          </SectionLayout>
          <SectionLayout>
            <h2 className="font-serif">{category.packages.title}</h2>
            <CarouselContainer color={category.color}>
              {category.packages.packages.map((card, i) => (
                <CarouselItem
                  key={i}
                  className="basis-full lg:flex lg:basis-1/3 lg:items-end"
                >
                  <CardDefault
                    title={card.title}
                    description={card.description}
                    color={category.color}
                    cta={card.cta}
                    slug="/packages"
                    key={i}
                    // @ts-ignore: Incompatible module types
                    variant="outlined" // eslint-disable-line
                    buttonVariant={i === 1 ? "filled" : "outlined"}
                  />
                </CarouselItem>
              ))}
            </CarouselContainer>
          </SectionLayout>
        </>
      )}
    </>
  );
}
