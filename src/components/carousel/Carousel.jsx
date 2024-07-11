import React, { useEffect, useState } from "react";

import Images from "./Images";
import NextImage from "./NextImage";
import PrevImage from "./PrevImage";

import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { AiOutlineSwapLeft, AiOutlineSwapRight } from "react-icons/ai";

const IMAGE_DURATION = 2000;
const FIRST_SLIDER_NUM = 1;
const LAST_SLIDER_NUM = 3;

export default function Slider() {
  const [slider, setSlider] = useState(1); // 몇번째 slider인지 0~4
  const [isTransition, setIsTransition] = useState(true);
  const [isAble_btnClick, setIsAble_btnClick] = useState(true);
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [isTextAni, setIsTextAni] = useState(false);
  const [isFirst, setIsFirst] = useState(true); // 첫 렌더링인지 체크후 바로 false가 되는 state

  const handlePrev = () => {
    if (!isAble_btnClick) return;

    setSlider((v) => v - 1);
    textAniController();
    setIsAble_btnClick(false);
    setIsBtnClicked((prev) => !prev);
    setTimeout(() => setIsAble_btnClick(true), IMAGE_DURATION * 1.1);
  };

  const handleNext = () => {
    if (!isAble_btnClick) return;

    setSlider((v) => v + 1);
    textAniController();
    setIsAble_btnClick(false);
    setIsBtnClicked((prev) => !prev);
    setTimeout(() => setIsAble_btnClick(true), IMAGE_DURATION * 1.1);
  };

  const textAniController = () => {
    setIsTextAni(false);
    setTimeout(() => setIsTextAni(true), IMAGE_DURATION * 1.1); // 애니메이션 시간 후 상태 초기화
  };

  useEffect(() => {
    setIsFirst(false);
  }, []);

  useEffect(() => {
    if (slider === 4) {
      setTimeout(() => {
        setIsTransition(false);
        setSlider(FIRST_SLIDER_NUM);
      }, IMAGE_DURATION);

      setTimeout(() => {
        setIsTransition(true);
      }, IMAGE_DURATION * 1.1); // tanstition이 활성화가 지연되는 시간과 버튼의 활성화가 지연되는 시간을 동일하게 해줘야 움직임에 끊김이 없다.
    }

    if (slider === 0) {
      setTimeout(() => {
        setIsTransition(false);
        setSlider(LAST_SLIDER_NUM);
      }, IMAGE_DURATION);

      setTimeout(() => {
        setIsTransition(true);
      }, IMAGE_DURATION * 1.1);
    }
  }, [slider]);
  return (
    <>
      {/* 뷰어 */}
      <div className="relative viewer ">
        {/* slider */}
        <div
          // * isFirst : 이 페이지에 첫 접근이라면 이미지슬라이드를 살짝 움직여서 배너에 애니메이션 효과를 준다.
          // * isTransition : transition이 활성화 된 상태라면 duration-2000을 준다.

          // ! slider의 너비 때문에 생기는 문제같아
          className={`flex slider
          ease-out
          ${isFirst ? "first-slide opacity-0" : `slide${slider}`}
          ${isTransition && `duration-2000`}
          `}
        >
          <PrevImage //
            slider={slider}
            isBtnClicked={isBtnClicked}
          />
          <Images
            slider={slider}
            isBtnClicked={isBtnClicked}
            isAble_btnClick={isAble_btnClick}
          />
          <NextImage //
            slider={slider}
            isBtnClicked={isBtnClicked}
          />
        </div>
        <div className="arrow-box  flex justify-between bottom-44 text-6xl  ">
          <button className=" animate-pulse" onClick={handlePrev}>
            <AiOutlineSwapLeft />
          </button>
          <button className="animate-pulse" onClick={handleNext}>
            <AiOutlineSwapRight />
          </button>
        </div>
      </div>
    </>
  );
}
