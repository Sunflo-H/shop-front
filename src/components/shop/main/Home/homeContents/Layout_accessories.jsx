import React from "react";
import Button from "../../../../ui/Button";
import useCategoryNavigation from "../../../../../hooks/useCategoryNavigation";

export default function Layout_accessories() {
  const { handleGoToAccessories } = useCategoryNavigation();
  return (
    <section className="relative w-full h-screen max-h-96 mb-20 bg-black">
      <div className="w-full h-full bg-cover bg-center bg-accessories opacity-70"></div>
      <div className="absolute w-full top-28 text-center ">
        <h2 className="text-6xl font-bold mb-12 text-white">
          Accessories Recommend
        </h2>
        <div>
          <Button
            text={"Shop Now"}
            color={"white"}
            onClick={handleGoToAccessories}
          />
        </div>
      </div>
    </section>
  );
}
