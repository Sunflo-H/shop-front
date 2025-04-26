import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { useParams } from "react-router-dom";

const navItemList = ["Home", "Man", "Woman", "Accessory", "Shoes", "Recommend"];

export default function Nav() {
  return (
    <nav className="hidden grow items-stretch gap-1 md:flex lg:gap-5 xl:gap-6">
      {navItemList.map((navItem) => (
        <NavItem key={navItem} navItem={navItem} />
      ))}
    </nav>
  );
}
