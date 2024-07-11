import React from "react";
import NavItem from "./NavItem";

export default function Nav() {
  const navItemList = [
    "Home",
    "Men",
    "Women",
    "Accessories",
    "Shoes",
    "Recommend",
  ];

  return (
    <nav className="hidden md:flex grow">
      <div className={`flex gap-1 lg:gap-5 xl:gap-10`}>
        {navItemList.map((navItem, i) => (
          <NavItem navItem={navItem} key={i} />
        ))}
      </div>
    </nav>
  );
}
