import HomepageHero from "./components/homepage/hero";
import { cardsContent } from "./components/carousel/cards-content";
import { color } from "@material-tailwind/react/types/components/alert";
import PricingPreview from "./components/pricing/pricing-packages-preview";
import Section from "./components/homepage/section";

export default function Home() {
  return (
    <main className="w-full border border-transparent">
      <HomepageHero />
      {cardsContent.map(
        (
          section: {
            label: string;
            color: color | undefined;
            subsections: {
              title: string[];
              cards: {
                title: string;
                image?: string;
                description: string;
              }[];
              cta: string;
            }[];
          },
          i
        ) => {
          return (
            <Section
              label={section.label}
              color={section.color}
              subsections={section.subsections}
              key={i}
            />
          );
        }
      )}
      <PricingPreview />
    </main>
  );
}
