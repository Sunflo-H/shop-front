import { createContext, useContext, useEffect, useState } from "react";
import { login, logout, onUserStateChange } from "../api/firebase_auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // 구글 로그인 유저 정보를 담는 state
  const [user, setUser] = useState(null);

  /**
   * 상품 업로드나, 장바구니처럼 아무나 접근할수 없는 URL이 있다.
   * admin 유저 또는 로그인한 유저만 접근할 수 있게 하는 <ProtectedRoute />
   * !근데 이런 URL에 접근할 자격이 있어도 URL을 직접 입력하면
   * !유저 정보를 바로 불러오지못해 로그인을 했음에도 접근할수 없는 문제가 생긴다.
   * *이를 해결하기 위해 isLoading으로 로그인중인지 확인할 약간의 지연시간을 만든다.
   */
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onUserStateChange(changeUserState);
  }, []);

  function changeUserState(user) {
    setUser(user);
    setIsLoading(false);
  }

  return (
    <AuthContext.Provider
      value={{ user, uid: user && user.uid, login, logout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};
