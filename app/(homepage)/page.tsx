import HomepageHero from "../ui/homepage/hero";
import PricingPreview from "../ui/homepage/book-a-tour";
import SeeAndDo from "../ui/homepage/see-and-do";
import PlanYourTravel from "../ui/homepage/plan-your-travel";
import MeetThePeople from "../ui/homepage/meet-the-people";

export default function Home() {
  return (
    <main className="w-full border border-transparent">
      <HomepageHero />
      <SeeAndDo />
      <PlanYourTravel />
      <MeetThePeople />
      <PricingPreview />
    </main>
  );
}
