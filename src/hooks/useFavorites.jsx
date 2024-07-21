import {
  addFavorites,
  getFavorites,
  removeFavorites,
} from "../api/firebase_db";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

export default function useFavorites(product, currentCategory) {
  const user = useSelector((state) => state.auth.user);
  const { uid } = user ?? {};
  const queryClient = useQueryClient();
  const [isFavorite, setIsFavorite] = useState(false); // 찜

  /**
   * firebase로부터 favorite product 데이터를 요청합니다.
   */
  const favoriteQuery = useQuery({
    queryKey: ["favorites", uid],
    queryFn: async () => getFavorites(uid),
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });

  /**
   * favorites 데이터에서 id를 뽑아 Set으로 저장
   */
  const favoritesIdSet = useMemo(() => {
    return new Set(favoriteQuery.data?.map((favorite) => favorite.id));
  }, [favoriteQuery.data]);

  useEffect(() => {
    setIsFavorite(favoritesIdSet.has(product?.id));
  }, [favoriteQuery.data, currentCategory]);

  /**
   * db의 favorites data 와 isFavorite State를 조작하는 함수
   * 클릭이벤트에 사용하여 찜 상태를 db에 전달한다.
   */
  const favoriteBtnClick = () => {
    if (user) {
      setIsFavorite((prev) => {
        prev ? removeFavorites(product, uid) : addFavorites(product, uid);
        return !prev;
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Sign in first!",
        confirmButtonColor: "#222",
      });
    }
  };

  const updateFavorites = useMutation({
    mutationFn: favoriteBtnClick,
    onSuccess: () => {
      queryClient.invalidateQueries(["favorites", uid]);
    },
  });

  return { favoriteQuery, isFavorite, updateFavorites };
}
