import HomepageHero from "./components/homepage/hero";
import { cardsContent } from "./components/carousel/cards-content";
import { color } from "@material-tailwind/react/types/components/alert";
import PricingPreview from "./components/pricing/pricing-packages-preview";
import Section from "./components/homepage/section";
import { getHomepagePreviews } from "@/lib/api";
import { PreviewCategories, PreviewSubsection } from "../lib/types";

export default async function Home({ params }: { params: { slug: string } }) {
  const cards: PreviewCategories | null = await getHomepagePreviews();
  let subsectionData: PreviewSubsection[] | null = null;
  if (cards) {
    subsectionData = [
      {
        title: ["Visit the ", "monumental sights"],
        color: "yellow",
        cards: cards.sights.map((card) => {
          return {
            title: card.title,
            image: card.image.node.mediaItemUrl,
            description: card.preview.description,
          };
        }),
        cta: "See more sights",
      },
      {
        title: ["Discover the ", "nature"],
        color: "yellow",
        cards: new Array(6).fill(
          cards.nature.map((card) => {
            return {
              title: card.title,
              image: card.image.node.mediaItemUrl,
              description: card.preview.description,
            };
          })[0]
        ),
        cta: "See more trails",
      },
      {
        title: ["Taste the ", "cuisine"],
        color: "yellow",
        cards: new Array(6).fill(
          cards.food.map((card) => {
            return {
              title: card.title,
              image: card.image.node.mediaItemUrl,
              description: card.preview.description,
            };
          })[0]
        ),
        cta: "See more restaurants",
      },
      {
        title: ["Book your ", "perfect stay"],
        color: "yellow",
        cards: new Array(6).fill(
          cards.accommodation.map((card) => {
            return {
              title: card.title,
              image: card.image.node.mediaItemUrl,
              description: card.preview.description,
            };
          })[0]
        ),
        cta: "See more accommodations",
      },
    ];
  }

  return (
    <main className="w-full border border-transparent">
      <HomepageHero />
      {subsectionData && (
        <Section
          label="See and do"
          color="yellow"
          subsections={subsectionData}
        />
      )}
      {/* {cardsContent.map(
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
      )} */}
      <PricingPreview />
    </main>
  );
}
