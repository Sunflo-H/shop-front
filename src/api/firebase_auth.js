import app from "./firebase_config";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";

const provider = new GoogleAuthProvider();
const auth = getAuth(); // 인증 기능
const db = getDatabase(app); // 실시간 데이터베이스 기능 호출

// 로그인 할 때마다 유저를 선택하는 옵션
provider.setCustomParameters({
  prompt: "select_account",
});

/**
 * 팝업 창을 사용하여 로그인 과정 진행
 */
export function login() {
  signInWithPopup(auth, provider);
}

export function logout() {
  signOut(auth);
}

/**
 * @param {*} setUser
 *
 * 인증 방법으로 로그인한 유저의 정보를 가져오는 함수
 */
export function onUserStateChange(changeUserState) {
  onAuthStateChanged(auth, async (user) => {
    const user_addAdmin = user && (await addIsAdmin(user)); // isAdmin 속성이 추가된 user

    changeUserState(user_addAdmin); // 유저 정보 저장
    /*
     *  changeUserState (user) => {
     *   setUser(user);
     *   setIsLoading(false);
     *  }
     */
  });
}

/**
 * @param {*} user
 * @returns user (isAdmin : true/false 속성 추가)
 *
 * user.uid와 일치하는 값이 admins에 있는지 확인하여 있다면 user에 isAdmin 속성을 추가하여 반환하는 함수
 */
async function addIsAdmin(user) {
  try {
    const snapshot = await get(ref(db, `admins/`)); // DB에서 admins/ 경로의 데이터를 가져온다.
    if (snapshot.exists()) {
      const admins = snapshot.val();
      const isAdmin = admins.includes(user.uid);
      return { ...user, isAdmin }; //유저 데이터에 isAdmin 속성 추가
    } else return user;
  } catch (error) {
    console.error(error);
  }
}
