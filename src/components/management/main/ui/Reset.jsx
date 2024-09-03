import React from "react";
import { GrPowerReset } from "react-icons/gr";
import { useDispatch } from "react-redux";

export default function Reset({ resetFilterAction }) {
  const dispatch = useDispatch();
  const handleResetClick = () => {
    console.log(resetFilterAction);
    console.log(1);
    dispatch(resetFilterAction());
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
