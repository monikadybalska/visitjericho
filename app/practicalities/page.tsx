import { getPracticalitiesPage } from "@/lib/api";
import CardSmall from "../components/primitives/cards/card-small";
import { PracticalitiesPage } from "@/lib/types";
import SubcategoryHero from "../components/subcategory-pages/header";
import SightsIcon from "../components/icons/SightsIcon";
import LightbulbIcon from "../components/icons/LightbulbIcon";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export default async function Itineraries() {
  const category: PracticalitiesPage | null = await getPracticalitiesPage();

  return (
    <div>
      {category && (
        <>
          <SubcategoryHero
            image={category.image}
            title={category.title}
            subtitle={category.subtitle}
          />
          <div className="mt-10">
            <h2 className="font-serif mb-10">{category.gettingThere.title}</h2>
            <div className="flex gap-4">
              <div className="flex flex-col gap-4">
                {category.gettingThere.cards
                  .filter((card, i) => i % 2 === 0)
                  .map((card, i) => (
                    <div key={i} className="md:basis-1/2">
                      <CardSmall
                        key={i}
                        title={card.title}
                        description={card.description}
                        color={category.color}
                        icon={SightsIcon}
                        variant="outlined"
                      />
                    </div>
                  ))}
              </div>
              <div className="flex flex-col gap-4">
                {category.gettingThere.cards
                  .filter((card, i) => i % 2 !== 0)
                  .map((card, i) => (
                    <div key={i} className="md:basis-1/2">
                      <CardSmall
                        key={i}
                        title={card.title}
                        description={card.description}
                        color={category.color}
                        icon={SightsIcon}
                        variant="outlined"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="font-serif mb-10">{category.tips.title}</h2>
            <div className="flex flex-col justify-between gap-4">
              <ul>
                {category.tips.tips.map((tip, i) => (
                  <li key={i}>
                    <div className="mb-4">
                      <div className="flex flex-row">
                        <LightbulbIcon
                          className={`w-6 h-6 sm:w-7 sm:h-7 mr-2 text-${category.color} fill-current`}
                        />
                        <h3 className="mb-2 font-serif">{tip.title}</h3>
                      </div>
                      <p>{tip.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
