import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ navItem }) {
  const link = getLink(navItem);

  return (
    <Link
      to={link}
      className="font-bold text-sm border-b-2 border-transparent hover:border-black pt-6 px-2"
    >
      {navItem}
    </Link>
  );
}

function getLink(navItem) {
  let result = "";

  if (navItem === "Home") result = "/";
  else result = `/products/${navItem}`;

  return result;
}
