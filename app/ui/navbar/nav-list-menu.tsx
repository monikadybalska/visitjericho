import React from "react";
import {
  Collapse,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function NavListMenu({
  title,
  openedItemMobile,
  setOpenedItemMobile,
  children,
}: {
  title: string;
  slug: string;
  openedItem: string | null;
  setOpenedItem: React.Dispatch<React.SetStateAction<string | null>>;
  openedItemMobile: string | null;
  setOpenedItemMobile: React.Dispatch<React.SetStateAction<string | null>>;
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <div>
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium"
              selected={isMenuOpen || openedItemMobile === title}
              onClick={() =>
                setOpenedItemMobile((cur) => (cur === title ? null : title))
              }
              ripple={false}
            >
              {title}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  openedItemMobile === title ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </div>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className={`grid gap-y-2 outline-none outline-0`}>{children}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={openedItemMobile === title}>{children}</Collapse>
      </div>
    </React.Fragment>
  );
}
