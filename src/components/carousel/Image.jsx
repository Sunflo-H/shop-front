import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import useCategoryNavigation from "../../hooks/useCategoryNavigation";

export default function Image({ num, slider, isBtnClicked, text }) {
  const [isAni, setIsAni] = useState(false); //false -> true가 되면서 이미지가 움직여, true인 상태를 유지
  const { handleGoToMen } = useCategoryNavigation();
  // 슬라이드 내부 컨텐츠에 적용된 애니메이션이 부드럽게 작동되기 위해 PrevImage, NextImage일때는 slider의 값을 바꿔준다.
  if (slider === 4) slider = 1;
  if (slider === 0) slider = 3;

  useEffect(() => {}, []);

  useEffect(() => {
    setIsAni(false);
    setTimeout(() => {
      setIsAni(true);
    }, 500);
  }, [isBtnClicked]);

  return (
    <section className=" slide relative mb-20">
      <div className=" slide bg-white ">
        <div
          className={`bg-cover bg-no-repeat banner${num} banner-img
          bg-left40 opacity-0
           ${num !== slider && "animate-hide"}
           ${
             num === slider &&
             isAni &&
             "animate-banner-img-sm xl:animate-banner-img "
           }
          `}
        ></div>
      </div>
      <div className="text-box">
        <div
          className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-10 text-zinc-900 opacity-0
            translate-x-10
            ${num !== slider && "animate-hide"}
            ${num === slider && isAni && "animate-banner-text"}
          `}
        >
          <div>Discover</div>
          <div>your new styles</div>
        </div>

        <Button
          text={"Shop Now"}
          onClick={handleGoToMen}
          isAni={isAni}
          num={num}
          slider={slider}
        />
      </div>
    </section>
  );
}
