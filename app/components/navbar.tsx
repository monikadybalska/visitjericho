"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  NavbarStylesType,
  ThemeProvider,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import SightsIcon from "@/public/SightsIcon";

import HeaderLogo from "./header-logo";
import { Providers } from "../providers";

const navListMenuItems = [
  {
    title: "See and do",
    items: [
      {
        title: "Sights",
        icon: SquaresPlusIcon,
      },
      {
        title: "Nature",
        icon: SquaresPlusIcon,
      },
      {
        title: "Food",
        icon: SquaresPlusIcon,
      },
      {
        title: "Accommodation",
        icon: SquaresPlusIcon,
      },
    ],
  },
  {
    title: "Plan your trip",
    items: [
      {
        title: "Practicalities ",
        icon: SquaresPlusIcon,
      },
      {
        title: "Trip itineraries",
        icon: SquaresPlusIcon,
      },
    ],
  },
];

function NavListMenu({
  title,
  items,
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
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = items.map(({ icon, title }, key) => (
    <a href="#" key={key}>
      <MenuItem
        className="flex items-center gap-3 rounded-lg hover:bg-orange-light focus:bg-orange-light active:bg-orange-light"
        placeholder="default"
        onPointerEnterCapture="default"
        onPointerLeaveCapture="default"
      >
        <div className="flex items-center justify-center rounded-lg bg-orange p-2 ">
          {" "}
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 text-white w-6",
          })}
        </div>
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
            placeholder="default"
            onPointerEnterCapture="default"
            onPointerLeaveCapture="default"
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
          <Typography
            as="div"
            variant="small"
            className="font-medium"
            placeholder="default"
            onPointerEnterCapture="default"
            onPointerLeaveCapture="default"
          >
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-black"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              placeholder="default"
              onPointerEnterCapture="default"
              onPointerLeaveCapture="default"
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
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          className="hidden max-w-screen-xl rounded-xl lg:block"
          placeholder="default"
          onPointerEnterCapture="default"
          onPointerLeaveCapture="default"
        >
          <ul className={`grid gap-y-2 outline-none outline-0`}>
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
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
        <NavListMenu title={item.title} items={item.items} key={item.title} />
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

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Providers>
      <Navbar
        className="max-w-screen-xl p-0"
        placeholder="default"
        onPointerEnterCapture="default"
        onPointerLeaveCapture="default"
      >
        <div className="flex items-center justify-between text-black">
          <a href="/">
            <HeaderLogo />
          </a>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            color="black"
            className="lg:hidden hover:text-orange focus:text-orange active:text-orange hover:bg-white hover:bg-opacity-100 focus:bg-white focus:bg-opacity-100 active:bg-white active:bg-opacity-100"
            onClick={() => setOpenNav(!openNav)}
            placeholder="default"
            onPointerEnterCapture="default"
            onPointerLeaveCapture="default"
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </Providers>
  );
}
