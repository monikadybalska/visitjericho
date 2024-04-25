import { color } from "@material-tailwind/react/types/components/alert";
import Steppers from "./steppers";
import { getItineraryTimeline } from "@/lib/api";

export default async function TimelineStepper({
  slug,
  color,
}: {
  slug: string;
  color: color;
}) {
  const days = await getItineraryTimeline(slug);
  return days ? (
    <Steppers color={color} days={days.filter((day) => day[0].title)} />
  ) : (
    <h2>No data</h2>
  );
}
