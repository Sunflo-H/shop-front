import React from "react";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div className="flex self-center w-screen max-w-screen-2xl ">
      <Outlet />
    </div>
  );
}
