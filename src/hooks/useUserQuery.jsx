//! 아직 안씀 useQuery와 customHook이 익숙해져야함
export default function useUserQuery(user) {
  // const { email, password, _id } = user ?? {};
  // const token = localStorage.getItem("jwt");
  // // JWT로 유저 데이터를 가지고 오는 react-query
  // const userQueryByJWT = useQuery({
  //   queryKey: ["user", _id],
  //   queryFn: async () => getLoginedUserByJWT(token),
  //   enabled: !!token,
  // });
  // const loginMutation = useMutation({
  //   mutationFn: async ({ email, password }) => login(email, password),
  //   onSuccess: (data) => {
  //     const { token, user } = data;
  //     localStorage.setItem("jwt", token);
  //     navigate("/");
  //     dispatch(setUser(user));
  //   },
  //   onError: (err) => {
  //     alert_loginError("Email and password do not match");
  //   },
  // });
  // return { userQueryByJWT };
}
