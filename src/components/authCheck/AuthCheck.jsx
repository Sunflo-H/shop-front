import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../slice/authSlice";
import axios from "axios";

// jwt를 확인하여 데이터를 가지고오는 컴포넌트입니다.
export default function AuthCheck() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    async function fetchUser() {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/api/protected-route",
          {
            headers: {
              Authorization: `Bearer ${token}`, // JWT 토큰을 Authorization 헤더에 포함
              "Content-Type": "application/json", // 요청의 데이터 형식을 JSON으로 지정
            },
          }
        );

        dispatch(setUser(data));
      } catch (error) {
        console.log("jwt fetch error");
      }
    }
    token && fetchUser();
  }, []);

  return <></>;
}
