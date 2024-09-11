import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getLoginedUserByJWT } from "../../api/userApi";
import { useDispatch } from "react-redux";
import { setIsLogined } from "../../slice/authSlice";

// jwt를 확인하여 데이터를 가지고오는 컴포넌트입니다.
export default function AuthCheck() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("jwt");

  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      if (!token) {
        throw new Error("No token");
      }
      return getLoginedUserByJWT(token);
    },
    enabled: !!token,
    retry: false,
  });

  useEffect(() => {
    if (data) dispatch(setIsLogined(true));
  }, [data]);

  return <></>;
}
