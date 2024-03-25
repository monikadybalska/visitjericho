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
    <List
      className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 uppercase"
      placeholder="default"
      onPointerEnterCapture="default"
      onPointerLeaveCapture="default"
    >
      <Typography
        as="a"
        href="#"
        variant="small"
        color="black"
        className="font-medium"
        placeholder="default"
        onPointerEnterCapture="default"
        onPointerLeaveCapture="default"
      >
        <ListItem
          className="flex items-center gap-2 py-2 pr-4"
          placeholder="default"
          onPointerEnterCapture="default"
          onPointerLeaveCapture="default"
        >
          Home
        </ListItem>
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
      <Typography
        as="a"
        href="#"
        variant="small"
        color="black"
        className="font-medium"
        placeholder="default"
        onPointerEnterCapture="default"
        onPointerLeaveCapture="default"
      >
        <ListItem
          className="flex items-center gap-2 py-2 pr-4"
          placeholder="default"
          onPointerEnterCapture="default"
          onPointerLeaveCapture="default"
        >
          Contact Us
        </ListItem>
      </Typography>
      <Button
        className="my-2 mx-3 lg:my-0"
        size="sm"
        placeholder="default"
        onPointerEnterCapture="default"
        onPointerLeaveCapture="default"
      >
        Book a Tour
      </Button>
    </List>
  );
}
