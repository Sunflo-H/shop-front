import React from "react";
import { alert_checkoutSuccess } from "../../../../alerts/success";

export default function Checkout() {
  const handleCheckOutClick = () => {
    alert_checkoutSuccess();
  };
  return (
    <div
      className="bg-black text-white mt-2 py-2 mx-4 text-center font-bold cursor-pointer"
      onClick={handleCheckOutClick}
    >
      CHECKOUT NOW
    </div>
  );
}
