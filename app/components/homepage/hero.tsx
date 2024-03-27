"use client";

import { Button } from "@material-tailwind/react";
import { Providers } from "../../providers";
import Image from "next/image";

export default function HomepageHero() {
  return (
    <div className="relative h-96 lg:h-[32rem] 3xl:h-[50rem] w-full overflow-y-hidden flex items-center justify-center">
      <div className="block">
        <Image
          src="/homepagehero4.jpg"
          alt=""
          // width={719.25}
          // height={192}
          fill
          sizes="100vw"
          className="object-cover object-center z-0"
        />
      </div>
      <div className="bg-white/80 w-full flex justify-center px-5 py-8 sm:px-20 z-10 relative">
        <div className="w-full max-w-screen-xl flex flex-col gap-6 z-20">
          <h1 className="font-serif">Experience the rich culture of Jericho</h1>
          <div>
            <Providers>
              <Button size="md" className="font-[400]">
                Book a Tour
              </Button>
            </Providers>
          </div>
        </div>
      </div>
    </div>
  );
}
