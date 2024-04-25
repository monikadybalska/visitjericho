import { getPracticalitiesPage } from "@/lib/api";
import { PracticalitiesPage } from "@/lib/types";

import SubcategoryHero from "../components/header";
import ColumnsWithCards from "../../components/layouts/columns-with-cards";
import LightbulbIcon from "@/public/LightbulbIcon";
import SectionLayout from "../../components/layouts/section-layout";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function Itineraries() {
  const category: PracticalitiesPage | null = await getPracticalitiesPage();

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
            <h2 className="font-serif">{category.gettingThere.title}</h2>
            <ColumnsWithCards
              color={category.color}
              cards={category.gettingThere.cards}
            />
          </SectionLayout>
          <SectionLayout>
            <h2 className="font-serif">{category.tips.title}</h2>
            <ul className="flex flex-col justify-between gap-4">
              {category.tips.tips.map((tip, i) => (
                <li key={i} className="flex flex-col justify-between gap-2">
                  <div className="flex flex-row">
                    <LightbulbIcon
                      className={`w-6 h-6 sm:w-7 sm:h-7 mr-2 text-${category.color} fill-current`}
                    />
                    <h3 className="font-serif">{tip.title}</h3>
                  </div>
                  <p>{tip.description}</p>
                </li>
              ))}
            </ul>
          </SectionLayout>
        </>
      )}
    </>
  );
}
