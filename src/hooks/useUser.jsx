import { useQuery } from "@tanstack/react-query";
import { login } from "../api/userApi";

export default function useUser(email, password) {
  const userQuery = useQuery({
    queryKey: ["user", email],
    queryFn: login(email, password),
  });
  return { userQuery };
}
