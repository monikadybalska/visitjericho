"use client";
import React from "react";
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import NavList from "./nav-list";

import HeaderLogo from "../../../../public/logo";
import { Providers } from "../../../_lib/providers";

import Link from "next/link";

export function NavigationBarMobile() {
  const [openNav, setOpenNav] = React.useState(false);
  const [openedItem, setOpenedItem] = React.useState<string | null>(null);
  const [openedItemMobile, setOpenedItemMobile] = React.useState<string | null>(
    null
  );

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Providers>
      <Navbar className="max-w-screen-xl p-0 lg:hidden">
        <button
          className="absolute w-full text-center -top-20 text-black uppercase focus:opacity-1 focus:-top-10 duration-1000"
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
          <IconButton
            variant="text"
            color="black"
            className="lg:hidden hover:text-orange focus:text-orange active:text-orange hover:bg-white hover:bg-opacity-100 focus:bg-white focus:bg-opacity-100 active:bg-white active:bg-opacity-100"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList
            openedItem={openedItem}
            setOpenedItem={setOpenedItem}
            openedItemMobile={openedItemMobile}
            setOpenedItemMobile={setOpenedItemMobile}
          />
        </Collapse>
      </Navbar>
    </Providers>
  );
}
