import { Typography, Button, List, ListItem } from "@material-tailwind/react";

import { navListMenuItems } from "./nav-list-menu-items";

import NavListMenu from "./nav-list-menu";

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
      <Typography
        as="a"
        href="#"
        color="black"
        className="font-medium text-base"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      {navListMenuItems.map((item) => (
        <NavListMenu
          title={item.title}
          items={item.items}
          key={item.title}
          openedItem={openedItem}
          setOpenedItem={setOpenedItem}
          openedItemMobile={openedItemMobile}
          setOpenedItemMobile={setOpenedItemMobile}
        />
      ))}
      <Typography as="a" href="#" color="black" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
      <Button className="my-2 mx-3 lg:my-0 font-[400]" size="md">
        Book a Tour
      </Button>
    </List>
  );
}
