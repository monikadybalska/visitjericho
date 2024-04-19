import HeaderLogo from "./logo";
import { navListMenuItemsData } from "./navbar/nav-list-menu-items-data";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="grid grid-cols-3 gap-3 w-full max-w-screen-xl text-black">
      <div className="flex flex-col gap-10">
        <a href="/" className="hidden sm:block">
          <HeaderLogo />
        </a>
        <p>
          Looking for information or help planning your visit? Get in touch!
        </p>
        <div>
          <h3 className="text-base font-medium uppercase">Address</h3>
          <p>Jericho – Al Quds st.</p>
          <h3 className="text-base font-medium uppercase">
            Telfax Mosaic Centre
          </h3>
          <p>(00970)-2-2326342</p>
          <h3 className="text-base font-medium uppercase">
            Jawwal Mosaic Centre
          </h3>
          <p>(00970)-595-278223</p>
          <h3 className="text-base font-medium uppercase">E-mail</h3>
          <p>mosaiccentre@yahoo.com</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-4">
        <h2 className="text-base font-bold uppercase text-orange">Pages</h2>
        <div className="flex flex-col gap-4">
          {navListMenuItemsData.map((category, i) => (
            <div key={i}>
              <h3 className="text-base font-medium uppercase">
                {category.title}
              </h3>
              {category.items.map((item, j) => (
                <Link
                  href={`/${item.slug}`}
                  className="hover:text-orange"
                  key={j}
                >
                  <p>{item.title}</p>
                </Link>
              ))}
            </div>
          ))}
          <div>
            <Link href="/meet-the-local-people" className="hover:text-orange">
              <h3 className="text-base font-medium uppercase">
                Meet the people
              </h3>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-4">
        <h2 className="text-base font-bold uppercase text-orange">
          About Mosaic Centre
        </h2>
        <p>
          MOSAIC CENTRE is a non-governmental association established in 2004
          that combines mosaic craftsmanship with ethical and social values. It
          has workshops in Jericho and Bethlehem.
        </p>
      </div>
    </div>
  );
}
