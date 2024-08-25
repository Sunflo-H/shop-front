import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Page from "./Page";
import {
  fetchProduct,
  setPage,
  setPageGroup,
} from "../../../../slice/management/productManagementSlice";

/**
 ** 페이지 네이션 변수
 * page : 1,2,3,4,5 같은 page입니다.
 * pageGroup : 한번에 5개(1,2,3,4,5)의 page를 보여준다면 이 5개의 page를 하나의 pageGroup라고 합니다.
 * limit : 한번에 보여질 page 개수입니다.
 */

const MIN_PAGE = 1;
const MIN_PAGEGROUP = 1;
const PAGE_PER_PAGEGORUP = 5;
const ARR_PAGE_PER_PAGEGORUP = [1, 2, 3, 4, 5];

export default function PageNation() {
  const dispatch = useDispatch();
  const {
    activeCategory,
    activeStatus,
    page,
    limit,
    pageGroup,
    filteredProducts,
  } = useSelector((state) => state.productManagement);

  const productCount = filteredProducts.length;
  let maxPage = Math.ceil(productCount / limit);
  let maxPageGroup = Math.ceil(maxPage / PAGE_PER_PAGEGORUP);

  const handlePageClick = (page) => {
    dispatch(setPage(page));
    dispatch(
      fetchProduct({
        category: activeCategory,
        status: activeStatus,
        page,
        limit,
      })
    );
  };

  const handlePrevPageGroupClick = () => {
    if (pageGroup === MIN_PAGEGROUP) return;

    const prevPageGroup = pageGroup - 1;
    const lastPage = // 이전 페이지 그룹의 마지막 페이지
      (prevPageGroup - 1) * PAGE_PER_PAGEGORUP +
      ARR_PAGE_PER_PAGEGORUP[ARR_PAGE_PER_PAGEGORUP.length - 1];
    dispatch(setPageGroup(prevPageGroup));
    dispatch(setPage(lastPage));
  };

  const handleNextPageGroupClick = () => {
    if (pageGroup === maxPageGroup) return;

    let nextPageGroup = pageGroup + 1;

    dispatch(setPageGroup(nextPageGroup));
    dispatch(
      setPage(
        (nextPageGroup - 1) * PAGE_PER_PAGEGORUP + ARR_PAGE_PER_PAGEGORUP[0]
      )
    );
  };

  const handlePrevPageClick = () => {
    if (page === MIN_PAGE) return;

    let firstPageInPageGroup =
      (pageGroup - 1) * PAGE_PER_PAGEGORUP + ARR_PAGE_PER_PAGEGORUP[0];

    if (page === firstPageInPageGroup) handlePrevPageGroupClick();
    else {
      dispatch(setPage(page - 1));
      dispatch(
        fetchProduct({
          category: activeCategory,
          status: activeStatus,
          page: page - 1,
          limit,
        })
      );
    }
  };

  const handleNextPageClick = () => {
    if (page === maxPage) return;

    let lastPageInPageGroup =
      (pageGroup - 1) * PAGE_PER_PAGEGORUP +
      ARR_PAGE_PER_PAGEGORUP[ARR_PAGE_PER_PAGEGORUP.length - 1];

    if (page === lastPageInPageGroup) handleNextPageGroupClick();
    else {
      dispatch(setPage(page + 1));
      dispatch(
        fetchProduct({
          category: activeCategory,
          status: activeStatus,
          page: page + 1,
          limit,
        })
      );
    }
  };

  return (
    <div className="nodrag w-full flex items-center justify-center gap-1 mt-4 mb-2">
      <div className="flex text-2xl">
        {/* '이전 페이지그룹' 이동 버튼 */}
        <div
          className="px-2 py-1 hover:bg-gray-300 rounded-md cursor-pointer"
          onClick={handlePrevPageGroupClick}
        >
          <MdKeyboardDoubleArrowLeft />
        </div>

        {/* '이전 페이지' 이동 버튼 */}
        <div
          className="px-2 py-1 hover:bg-gray-300 rounded-md cursor-pointer"
          onClick={handlePrevPageClick}
        >
          <MdKeyboardArrowLeft />
        </div>
      </div>
      {/* 페이지 넘버 */}
      <div className="flex items-center h-10 text-center font-bold gap-1">
        {ARR_PAGE_PER_PAGEGORUP.map((num, index) => {
          let pageNum = (pageGroup - 1) * PAGE_PER_PAGEGORUP + num;
          if (pageNum > maxPage) return;
          return (
            <Page
              value={pageNum}
              activePage={page}
              handlePageClick={handlePageClick}
              key={index}
            />
          );
        })}
      </div>
      <div className="flex text-2xl">
        {/* '다음 페이지' 이동 버튼 */}
        <div className="px-2 py-1 hover:bg-gray-300 rounded-md cursor-pointer">
          <MdKeyboardArrowRight onClick={handleNextPageClick} />
        </div>
        {/* '다음 페이지그룹' 이동 버튼 */}
        <div className="px-2 py-1 hover:bg-gray-300 rounded-md cursor-pointer">
          <MdKeyboardDoubleArrowRight onClick={handleNextPageGroupClick} />
        </div>
      </div>
    </div>
  );
}
