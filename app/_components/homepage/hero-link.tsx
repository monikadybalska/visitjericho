"use client";

import { Button } from "@material-tailwind/react";

import { Providers } from "../../_lib/providers";

import Link from "next/link";

export default function HeroButton() {
  return (
    <div>
      <Providers>
        <Link href="/packages">
          <Button size="md" className="font-medium" color="orange">
            Book a Tour
          </Button>
        </Link>
      </Providers>
    </div>
  );
}
