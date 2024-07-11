import React from "react";
import { FaCaretRight } from "react-icons/fa";

export default function CategoryTitle({ title, handleCollapsible, isOpen }) {
  return (
    <>
      <div className="py-1">
        <div
          className="flex gap-1 px-3 pb-2 cursor-pointer "
          onClick={handleCollapsible}
        >
          <FaCaretRight
            className={`self-center ${isOpen ? "rotate-90" : ""} duration-300`}
          />
          {title}
        </div>
      </div>
    </>
  );
}
