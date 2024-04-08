import { color } from "@material-tailwind/react/types/components/alert";
import Subsection from "./subsection";
import { HomepageSection } from "@/lib/types";

export default function Section({
  title,
  color,
  subsections,
}: Pick<HomepageSection, "title" | "color" | "subsections">) {
  return (
    <section className="relative flex w-full justify-center flex-col mt-16">
      <div
        role="label"
        className={`bg-${color}-light pl-5 py-2 sm:pl-20 items-center flex w-2/5 rounded-r-md absolute top-0 h-8`}
      ></div>
      <div className="flex flex-col w-full items-center px-5 md:px-20 z-10">
        <h2 className="uppercase flex max-w-screen-xl w-full text-base font-medium py-1">
          {title}
        </h2>
        {subsections.map((subsection, i) => {
          return (
            <Subsection
              title={subsection.title}
              cta={subsection.cta}
              places={subsection.places}
              color={color}
              key={i}
            />
          );
        })}
      </div>
    </section>
  );
}
