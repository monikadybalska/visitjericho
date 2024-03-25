"use client";

import { Button } from "@material-tailwind/react";
import { Providers } from "../providers";

export default function HomepageHero() {
  return (
    <div
      className="flex h-96 lg:h-[32rem] 3xl:h-[50rem] overflow-x-visible overflow-y-hidden w-full bg-center bg-cover items-center"
      style={{ backgroundImage: "url(hero2.jpg)" }}
    >
      <div className="bg-white/80 w-full flex justify-center px-5 py-8 sm:px-20">
        <div className="w-full max-w-screen-xl flex flex-col gap-6">
          <h1 className="z-1 font-serif">
            Experience the rich culture of Jericho
          </h1>
          <div>
            <Providers>
              <Button size="sm">Book a Tour</Button>
            </Providers>
          </div>
        </div>
      </div>
    </div>
  );
}
