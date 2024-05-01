"use client";
import React from "react";

import HeaderLogo from "@/public/logo";
import NavigationMenuDemoRadix from "./radix-navbar";
import { Providers } from "../../../_lib/providers";

import Link from "next/link";

export function NavigationBar() {
  return (
    <nav className="hidden w-full max-w-screen-xl p-0 lg:flex justify-between">
      <button
        className="absolute w-full max-w-screen-xl text-center -top-20 text-black uppercase focus:opacity-1 focus:top-0 duration-1000"
        onClick={(e) => {
          e.preventDefault();

          const main = document.querySelector("main") as HTMLElement;

          if (main) {
            main.scrollIntoView();
            main.focus();
          }
        }}
      >
        Skip to main content
      </button>
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="Click on the logo to go to homepage">
          <HeaderLogo />
        </Link>
      </div>
      <NavigationMenuDemoRadix />
    </nav>
  );
}
