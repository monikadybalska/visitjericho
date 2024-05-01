import { Button, List, ListItem } from "../../exports";

import NavListMenu from "./nav-list-menu";
import NavListMenuItem from "./nav-list-menu-item";
import { navListMenuItemsData } from "../nav-list-menu-items-data";

import Link from "next/link";
import { Providers } from "../../../_lib/providers";

export default function NavList({
  openedItem,
  setOpenedItem,
  openedItemMobile,
  setOpenedItemMobile,
}: {
  openedItem: string | null;
  setOpenedItem: React.Dispatch<React.SetStateAction<string | null>>;
  openedItemMobile: string | null;
  setOpenedItemMobile: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  return (
    <Providers>
      <List
        className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 uppercase items-center"
        role="menubar"
      >
        <Link
          href="/"
          role="menuitem"
          className="p-3 rounded-lg text-start leading-tight transition-all hover:bg-white hover:bg-opacity-100 focus:bg-white focus:bg-opacity-100 active:bg-white active:bg-opacity-100 hover:text-orange outline-auto flex items-center gap-2 py-2 pr-4"
        >
          Home
        </Link>
        {navListMenuItemsData.map((category) => (
          <NavListMenu
            title={category.title}
            slug={category.slug}
            key={category.slug}
            openedItem={openedItem}
            setOpenedItem={setOpenedItem}
            openedItemMobile={openedItemMobile}
            setOpenedItemMobile={setOpenedItemMobile}
          >
            {category.items.map((subcategory) => (
              <NavListMenuItem
                icon={subcategory.icon}
                title={subcategory.title}
                slug={subcategory.slug}
                key={subcategory.slug}
              ></NavListMenuItem>
            ))}
          </NavListMenu>
        ))}
        <Link
          href="/meet-the-local-people"
          role="menuitem"
          className="p-3 rounded-lg text-start leading-tight transition-all hover:bg-white hover:bg-opacity-100 focus:bg-white focus:bg-opacity-100 active:bg-white active:bg-opacity-100 hover:text-orange outline-auto flex items-center gap-2 py-2 pr-4"
        >
          Meet the People
        </Link>
        <Link href="/packages" role="menuitem" passHref legacyBehavior>
          <Button size="md" color="orange">
            Book a Tour
          </Button>
        </Link>
      </List>
    </Providers>
  );
}
