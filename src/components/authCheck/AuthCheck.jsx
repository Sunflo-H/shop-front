import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getLoginedUserIdByJWT, getUserById } from "../../api/userApi";
import { useDispatch } from "react-redux";
import { setIsLogined } from "../../slice/authSlice";
import { getJwtWithExpiry } from "../../utils/jwt_localstorage";

// jwt를 확인하여 데이터를 가지고오는 컴포넌트입니다.
export default function AuthCheck() {
  const dispatch = useDispatch();
  const token = getJwtWithExpiry("jwt");
  const { data: user } = useQuery({
    queryKey: ["loginedUser"],
    queryFn: async () => {
      if (!token) {
        throw new Error("No token");
      }
      const userId = await getLoginedUserIdByJWT(token);
      return getUserById(userId);
    },
    enabled: !!token,
    retry: false,
  });

  useEffect(() => {
    if (user) dispatch(setIsLogined(true));
  }, [user]);

  return <></>;
}
