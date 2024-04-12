import HomepageHero from "./components/homepage/hero";
import PricingPreview from "./components/homepage/book-a-tour";
import SeeAndDo from "./components/homepage/see-and-do";
import PlanYourTravel from "./components/homepage/plan-your-travel";
import MeetThePeople from "./components/homepage/meet-the-people";

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
