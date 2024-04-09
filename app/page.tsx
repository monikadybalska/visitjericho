import HomepageHero from "./components/homepage/hero";
import { cardsContent } from "./components/carousel/cards-content";
import { color } from "@material-tailwind/react/types/components/alert";
import PricingPreview from "./components/pricing/pricing-packages-preview";
import Section from "./components/homepage/section";
import { getHomepagePreviews } from "@/lib/api";
import { HomepageSection } from "../lib/types";

export const revalidate = 3600;

export default async function Home({ params }: { params: { slug: string } }) {
  const sections: HomepageSection[] | null = await getHomepagePreviews();

  return (
    <main className="w-full border border-transparent">
      <HomepageHero />
      {sections &&
        sections.map((section: HomepageSection, i) => {
          return (
            <Section
              title={section.title}
              color={section.color}
              subsections={section.subsections}
              key={i}
            />
          );
        })}
      <PricingPreview />
    </main>
  );
}
