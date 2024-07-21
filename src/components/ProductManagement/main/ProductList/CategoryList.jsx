import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import Category from "./Category";

export default function ProductListNav() {
  return (
    <div className="self-start text-lg font-bold bg-white mx-6 pb-4">
      <div className="flex gap-2 text-blue-500 px-8 py-4">
        Management <FiSettings className="self-center" />
      </div>
      <Category />
    </div>
  );
}
