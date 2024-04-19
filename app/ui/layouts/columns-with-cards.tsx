import { color } from "@material-tailwind/react/types/components/alert";

import Column from "./column";
import CardSmall from "../primitives/cards/card-small";
import SightsIcon from "../icons/SightsIcon";

export default function ColumnsWithCards({
  color,
  cards,
}: {
  color: color;
  cards: {
    title: string;
    description: string;
  }[];
}) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <Column>
        {cards
          .filter((card, i) => i % 2 === 0)
          .map((card, i) => (
            <CardSmall
              key={i}
              title={card.title}
              description={card.description}
              color={color}
              variant="outlined"
              icon={SightsIcon}
            />
          ))}
      </Column>
      <Column>
        {cards
          .filter((card, i) => i % 2 !== 0)
          .map((card, i) => (
            <CardSmall
              key={i}
              title={card.title}
              description={card.description}
              color={color}
              variant="outlined"
              icon={SightsIcon}
            />
          ))}
      </Column>
    </div>
  );
}
