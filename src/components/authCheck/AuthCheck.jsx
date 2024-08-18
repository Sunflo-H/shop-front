import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserName } from "../../slice/authSlice";
import axios from "axios";

// 오직 useAuthCheck()를 실행하는 컴포넌트입니다.
export default function AuthCheck() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    async function fetchUser() {
      const response = await axios.get(
        "http://localhost:5000/api/protected-route",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // JWT 토큰을 Authorization 헤더에 포함
            "Content-Type": "application/json", // 요청의 데이터 형식을 JSON으로 지정
          },
        }
      );
      const username = response.data;
      dispatch(setUserName(username));
    }
    fetchUser();
  }, []);
  return <></>;
}
