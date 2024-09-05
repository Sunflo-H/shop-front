import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { useParams } from "react-router-dom";

const navItemList = ["Home", "Man", "Woman", "Accessory", "Shoes", "Recommend"];

export default function Nav() {
  const { category } = useParams();
  const [activeNav, setActiveNav] = useState(null);

  useEffect(() => {
    setActiveNav(category);
  }, [category]);

  return (
    <nav className="hidden md:flex grow">
      <div className={`flex gap-1 lg:gap-5 xl:gap-10`}>
        {navItemList.map((navItem, i) => (
          <NavItem
            navItem={navItem}
            activeNav={activeNav}
            setActiveNav={setActiveNav}
            key={i}
          />
        ))}
      </div>
    </nav>
  );
}
