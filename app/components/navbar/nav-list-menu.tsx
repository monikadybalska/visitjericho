import React from "react";
import {
  Collapse,
  Typography,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function NavListMenu({
  title,
  items,
  openedItem,
  setOpenedItem,
  openedItemMobile,
  setOpenedItemMobile,
}: {
  title: string;
  items: {
    title: string;
    icon: React.ForwardRefExoticComponent<
      Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string | undefined;
        titleId?: string | undefined;
      } & React.RefAttributes<SVGSVGElement>
    >;
  }[];
  openedItem: string | null;
  setOpenedItem: React.Dispatch<React.SetStateAction<string | null>>;
  openedItemMobile: string | null;
  setOpenedItemMobile: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = items.map(({ icon, title }, key) => (
    <a href="#" key={key}>
      <MenuItem className="flex items-center gap-3 rounded-md hover:bg-orange-light focus:bg-orange-light active:bg-orange-light">
        <div className="flex items-center justify-center rounded-md bg-orange p-2 ">
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 text-white w-6",
            fill: "white",
          })}
        </div>
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-base font-bold"
          >
            {title}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ));

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
          <Typography as="div" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-black"
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
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className={`grid gap-y-2 outline-none outline-0`}>
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={openedItemMobile === title}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
