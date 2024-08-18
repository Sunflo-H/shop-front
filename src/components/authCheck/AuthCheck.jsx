import React, { useEffect } from "react";
import useAuthCheck from "../../hooks/useAuthCheck";
import { useDispatch } from "react-redux";
import { setUser } from "../../slice/authSlice";

// 오직 useAuthCheck()를 실행하는 컴포넌트입니다.
export default function AuthCheck() {
  // useAuthCheck();

  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("jwt");

    fetch("http://localhost:5000/api/protected-route", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // JWT 토큰을 Authorization 헤더에 포함
        "Content-Type": "application/json", // 요청의 데이터 형식을 JSON으로 지정
      },
    }).then((response) => {
      const data = response.json();
      console.log(data);
    });
  }, []);
  return <></>;
}
