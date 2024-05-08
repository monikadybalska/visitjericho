import HomepageHero from "./_components/homepage/hero";
import BookATour from "./_components/homepage/book-a-tour";
import SeeAndDo from "./_components/homepage/see-and-do";
import PlanYourTravel from "./_components/homepage/plan-your-travel";
import { Suspense } from "react";
import SectionSkeleton from "./_components/skeletons/section";
import MeetThePeople from "./_components/homepage/meet-the-people";

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
        <BookATour />
      </Suspense>
    </main>
  );
}
