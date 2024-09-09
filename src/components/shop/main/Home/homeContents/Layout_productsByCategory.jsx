import React from "react";
import Category from "../Category";
import Button from "../../../../ui/Button";
import { useSelector } from "react-redux";
import useCategoryNavigation from "../../../../../hooks/useCategoryNavigation";
import HomeProducts from "../../product/HomeProducts";

export default function Layout_productsByCategory() {
  const currentCategory = useSelector(
    (state) => state.category.currentCategory
  );
  const { handleGoToCategory } = useCategoryNavigation(currentCategory);
  return (
    <section className="w-full flex flex-col m-auto mb-20 ">
      {/* section의 헤더 영역 */}
      <div className="text-center mb-12">
        <p className="text-md mb-4 tracking-widest">
          <span className="font-bold mr-4">NEW</span>
          <span className="">COLLECTIONS</span>
        </p>
        <h2 className="text-5xl font-semibold">Featured Items</h2>
      </div>

      <Category />

      <div className="flex justify-center mb-14">
        <div className="md:w-2/3">
          <HomeProducts />
        </div>
      </div>

      <div className="text-center ">
        <Button text="See All" onClick={handleGoToCategory} />
      </div>
    </section>
  );
}
