import HeroImage from "./hero-image";

import { Suspense } from "react";
import MosaicSkeleton from "../skeletons/mosaic";
import HeroButton from "./hero-button";

export default function HomepageHero() {
  return (
    <div className="relative h-96 lg:h-[32rem] 3xl:h-[50rem] w-full overflow-y-hidden flex items-center justify-center">
      <Suspense fallback={<MosaicSkeleton className="w-full absolute" />}>
        <HeroImage />
      </Suspense>
      <div className="bg-white/80 w-full flex justify-center px-5 py-8 md:px-20 z-10 relative">
        <div className="w-full max-w-screen-xl flex flex-col gap-6 z-20">
          <h1 className="font-serif">Experience the rich culture of Jericho</h1>
          <HeroButton href="/packages" />
        </div>
      </div>
    </div>
  );
}
