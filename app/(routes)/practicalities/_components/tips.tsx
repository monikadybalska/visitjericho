import { getPracticalitiesPageTips } from "@/app/_lib/api";
import LightbulbIcon from "@/public/LightbulbIcon";

export default async function Tips() {
  const tips = await getPracticalitiesPageTips();
  return (
    tips && (
      <>
        <h2 className="font-serif">{tips.title}</h2>
        <ul className="flex flex-col justify-between gap-4">
          {tips.tips.map((tip, i) => (
            <li key={i} className="flex flex-col justify-between gap-2">
              <div className="flex flex-row">
                <LightbulbIcon
                  className={`w-6 h-6 sm:w-7 sm:h-7 mr-2 text-green fill-current`}
                />
                <h3 className="font-serif">{tip.title}</h3>
              </div>
              <p>{tip.description}</p>
            </li>
          ))}
        </ul>
      </>
    )
  );
}
