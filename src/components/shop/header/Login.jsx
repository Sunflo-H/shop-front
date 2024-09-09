import React from "react";

import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Link
      to="login"
      className="hidden font-bold font-sm border-b-2 border-transparent px-2 pt-5 pb-3 cursor-pointer 
          md:block hover:border-black"
    >
      Sign In
    </Link>
  );
}
