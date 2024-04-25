import HomepageHero from "./components/homepage/hero";
import PricingPreview from "./components/homepage/book-a-tour";
import SeeAndDo from "./components/homepage/see-and-do";
import PlanYourTravel from "./components/homepage/plan-your-travel";
import { Suspense } from "react";
import SectionSkeleton from "./components/skeletons/section";
import MeetThePeople from "./components/homepage/meet-the-people";

export default function Home() {
  return (
    <main className="w-full border border-transparent">
      <HomepageHero />
      <Suspense fallback={<SectionSkeleton />}>
        <SeeAndDo />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <PlanYourTravel />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <MeetThePeople />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <PricingPreview />
      </Suspense>
    </main>
  );
}
