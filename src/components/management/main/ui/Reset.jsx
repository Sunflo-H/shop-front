import React from "react";
import { GrPowerReset } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { resetFilter } from "../../../../slice/management/userManagementSlice";

export default function Reset() {
  const dispatch = useDispatch();
  const handleResetClick = () => {
    dispatch(resetFilter());
  };
  return (
    <div className="flex items-center">
      <GrPowerReset
        className="text-xl cursor-pointer transition-all hover:rotate-45"
        onClick={handleResetClick}
      />
    </div>
  );
}
