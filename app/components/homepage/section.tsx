import { color } from "@material-tailwind/react/types/components/alert";
import Subsection from "./subsection";

export default function Section({
  label,
  color,
  subsections,
}: {
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
}) {
  return (
    <section className="relative flex w-full justify-center flex-col mt-16">
      <div
        role="label"
        className={`bg-${color}-light pl-5 py-2 sm:pl-20 items-center flex w-2/5 rounded-r-md absolute top-0 h-8`}
      ></div>
      <div className="flex flex-col w-full items-center px-5 sm:px-20 z-10">
        <h2 className="uppercase flex max-w-screen-xl w-full text-base font-medium py-1">
          {label}
        </h2>
        {subsections.map((subsection, i) => {
          return (
            <Subsection
              title={subsection.title}
              cards={subsection.cards}
              cta={subsection.cta}
              color={color}
              key={i}
            />
          );
        })}
      </div>
    </section>
  );
}
