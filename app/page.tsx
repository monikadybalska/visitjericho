import HomepageHero from "./ui/homepage/hero";
import PricingPreview from "./ui/homepage/book-a-tour";
import SeeAndDo from "./ui/homepage/see-and-do";
import PlanYourTravel from "./ui/homepage/plan-your-travel";
import MeetThePeople from "./ui/homepage/meet-the-people";
import ParagraphSkeleton from "./ui/skeletons/paragraph";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="w-full border border-transparent">
      <HomepageHero />
      <Suspense fallback={<ParagraphSkeleton />}>
        <SeeAndDo />
      </Suspense>
      <Suspense fallback={<ParagraphSkeleton />}>
        <PlanYourTravel />
      </Suspense>
      <Suspense fallback={<ParagraphSkeleton />}>
        <MeetThePeople />
      </Suspense>
      <Suspense fallback={<ParagraphSkeleton />}>
        <PricingPreview />
      </Suspense>
    </main>
  );
}
