import React from "react";
import Button from "../../../ui/Button";
import useCategoryNavigation from "../../../../hooks/useCategoryNavigation";

export default function Layout_summer2023() {
  const { handleGoToMen } = useCategoryNavigation();
  return (
    <section className="w-full flex flex-col mb-20 ">
      <div className="flex flex-col md:flex-row w-full justify-around gap-2 md:px-20 ">
        <div className="h-48 md:w-2/5 md:h-auto overflow-hidden ">
          <img
            className="w-full h-full object-cover object-center"
            src="https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_600,w_520/v1678786208/shoppy/woman_ddotew.jpg"
          ></img>
        </div>
        <div className="h-48 md:w-2/5 md:h-auto overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src="https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_600,w_520/v1678786215/shoppy/man_ilgbef.jpg"
          ></img>
        </div>
      </div>
      <div className="text-center ">
        <p className="text-center font-bold md:font-normal text-xl md:text-3xl my-10 ">
          Embrace the relaxed elegance of the Spring
          <br />
          Summer 2023 collection
        </p>

        <Button text={"View All Collections"} onClick={handleGoToMen} />
      </div>
    </section>
  );
}
