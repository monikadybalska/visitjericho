import HomepageHero from "./ui/homepage/hero";
import PricingPreview from "./ui/homepage/book-a-tour";
import SeeAndDo from "./ui/homepage/see-and-do";
import PlanYourTravel from "./ui/homepage/plan-your-travel";
import { Suspense } from "react";
import SectionSkeleton from "./ui/skeletons/section";
import MeetThePeople from "./ui/homepage/meet-the-people";

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
