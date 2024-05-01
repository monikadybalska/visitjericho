"use client";

import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Providers } from "@/app/_lib/providers";
import { Button } from "../../exports";
import { navListMenuItemsData } from "../nav-list-menu-items-data";

const NavigationMenuDemoRadix = () => {
  return (
    <NavigationMenu.Root className="relative z-[1] flex justify-start lg:justify-end w-full lg:w-auto">
      <NavigationMenu.List className="center m-0 flex list-none rounded-[6px] p-1 flex-col lg:flex-row items-center">
        <NavigationMenu.Item>
          <Link
            className="uppercase text-base p-3 rounded-lg text-start leading-tight transition-all hover:bg-white hover:bg-opacity-100 focus:bg-white focus:bg-opacity-100 active:bg-white active:bg-opacity-100 hover:text-orange outline-auto flex items-center gap-2 py-2 pr-4"
            href="/"
          >
            Home
          </Link>
        </NavigationMenu.Item>
        {navListMenuItemsData.map((category, i) => (
          <NavigationMenu.Item key={i}>
            <NavigationMenu.Trigger className="uppercase text-base p-3 rounded-lg text-start leading-tight transition-all hover:bg-white hover:bg-opacity-100 focus:bg-white focus:bg-opacity-100 active:bg-white active:bg-opacity-100 hover:text-orange outline-auto flex items-center gap-2 py-2 group">
              {category.title}
              <CaretDownIcon
                className="relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto items-start">
              <ul className="one m-0 grid list-none gap-x-[10px] p-3 sm:grid-cols-2 w-[500px]">
                {category.items.map((subcategory, i) => (
                  <Link
                    key={i}
                    href={`/${subcategory.slug}`}
                    className="text-violet12 mb-[5px] font-medium leading-[1.2] w-full pt-[9px] pb-2 px-3 text-start cursor-pointer select-none transition-all hover:bg-opacity-80 focus:bg-opacity-80 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none flex items-center gap-3 rounded-md hover:bg-orange-light focus:bg-orange-light active:bg-orange-light"
                  >
                    <div className="flex items-center justify-center rounded-md bg-orange p-2 ">
                      {React.createElement(subcategory.icon, {
                        strokeWidth: 2,
                        className: "h-6 text-white w-6",
                        fill: "white",
                      })}
                    </div>
                    <p className="text-black flex items-center text-base font-bold normal-case">
                      {subcategory.title}
                    </p>
                  </Link>
                ))}
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        ))}
        <NavigationMenu.Item>
          <Link
            className="uppercase text-base p-3 rounded-lg text-start leading-tight transition-all hover:bg-white hover:bg-opacity-100 focus:bg-white focus:bg-opacity-100 active:bg-white active:bg-opacity-100 hover:text-orange outline-auto flex items-center gap-2 py-2 pr-4"
            href="/meet-the-local-people"
          >
            Meet the people
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Providers>
            <Link href="/packages" role="menuitem" passHref legacyBehavior>
              <Button size="md" color="orange">
                Book a Tour
              </Button>
            </Link>
          </Providers>
        </NavigationMenu.Item>
        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>
      <div className="perspective-[2000px] absolute top-full left-0 lg:-left-24 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)] shadow-md border border-[#f1f1f1]" />
      </div>
    </NavigationMenu.Root>
  );
};

export default NavigationMenuDemoRadix;
