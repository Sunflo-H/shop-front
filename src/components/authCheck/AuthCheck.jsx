import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../slice/authSlice";
import { useQuery } from "@tanstack/react-query";
import { getLoginedUser } from "../../api/userApi";

// jwt를 확인하여 데이터를 가지고오는 컴포넌트입니다.
export default function AuthCheck() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const token = localStorage.getItem("jwt");

  const { data, refetch } = useQuery({
    queryKey: ["user", user?._id],
    queryFn: async () => getLoginedUser(token),
    enabled: !!token,
  });

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data)); // 유저 데이터를 Redux 스토어에 저장
    }
  }, [data, dispatch]);

  return <></>;
}
