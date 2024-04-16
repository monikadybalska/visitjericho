import { Button, List, ListItem } from "@material-tailwind/react";

import NavListMenu from "./nav-list-menu";
import NavListMenuItems from "./nav-list-menu-items";
import { navListMenuItemsData } from "./nav-list-menu-items-data";

import Link from "next/link";

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
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 uppercase items-center">
      <Link href="/">
        <ListItem className="flex items-center gap-2 py-2 pr-4" ripple={false}>
          Home
        </ListItem>
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
            <NavListMenuItems
              icon={subcategory.icon}
              title={subcategory.title}
              slug={subcategory.slug}
              key={subcategory.slug}
            ></NavListMenuItems>
          ))}
        </NavListMenu>
      ))}
      <Link href="/meet-the-local-people">
        <ListItem className="flex items-center gap-2 py-2 pr-4" ripple={false}>
          Meet the People
        </ListItem>
      </Link>
      <Button size="md" className="font-medium" color="orange">
        Book a Tour
      </Button>
    </List>
  );
}
