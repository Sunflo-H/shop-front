import React from "react";
import useAuthCheck from "../../hooks/useAuthCheck";

// 오직 useAuthCheck()를 실행하는 컴포넌트입니다.
export default function AuthCheck() {
  useAuthCheck();
  return <div></div>;
}
