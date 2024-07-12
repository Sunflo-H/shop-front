import React, { useEffect } from "react";
import { onUserStateChange } from "../api/firebase_auth";
import { setIsLoading, setUser } from "../slice/authSlice";
import { useDispatch } from "react-redux";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  useEffect(() => {
    onUserStateChange(changeUserState);
  }, []);

  function changeUserState(user) {
    dispatch(setUser(user));
    dispatch(setIsLoading(false));
  }
}
