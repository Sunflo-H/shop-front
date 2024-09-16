import axios from "axios";

const GET_URL = process.env.REACT_APP_GET_USER_URL;
const UPDATE_URL = process.env.REACT_APP_UPDATE_USER_URL;
const DELETE_URL = process.env.REACT_APP_DELETE_USER_URL;
const REGISTER_URL = process.env.REACT_APP_REGISTER_URL;
const LOGIN_URL = process.env.REACT_APP_LOGIN_URL;
const AUTH_URL = process.env.REACT_APP_AUTH_URL;
const CHECK_URL = process.env.REACT_APP_CHECK_USER_URL;

export const fetchUsers = async (role, page, limit, searchQuery) => {
  console.log("일치하는 모든 유저 URL :", GET_URL);
  if (role === "ALL") role = "";

  const response = await axios.get(GET_URL, {
    params: { role, page, limit, searchQuery },
  });

  return response.data;
};

export const registerUser = async (newData) => {
  try {
    console.log("회원가입 URL :", REGISTER_URL);
    const { emailLocal, emailDomain } = newData;
    const email = emailLocal + "@" + emailDomain;

    const newUser = { ...newData, email };
    const response = await axios.post(REGISTER_URL, newUser);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchPagenation = async (role, searchQuery) => {
  console.log("페이지네이션 URL :", GET_URL);
  if (role === "ALL") role = "";
  const response = await axios.get(GET_URL, {
    params: { role, searchQuery },
  });
  return response.data;
};

export const updateUser = async (userToUpdate) => {
  try {
    console.log("업데이트 URL :", UPDATE_URL);
    const response = await axios.post(
      `${UPDATE_URL}/${userToUpdate._id}`,
      userToUpdate
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async (idList) => {
  try {
    console.log("삭제 URL :", DELETE_URL);
    const response = await axios.delete(DELETE_URL, { data: idList });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export async function login(email, password) {
  try {
    console.log("로그인 URL :", LOGIN_URL);
    //* data = {token, user}
    const { data } = await axios.post(LOGIN_URL, {
      email,
      password,
    });

    return data;
  } catch (err) {
    console.log("서버 요청 실패 :", err);
  }
}

// jwt토큰으로 userId를 얻는 함수
export async function getLoginedUserIdByJWT(token) {
  try {
    console.log("토큰으로부터 유저 id 가져오기 URL :", AUTH_URL);
    const { data: userId } = await axios.get(AUTH_URL, {
      headers: {
        Authorization: `Bearer ${token}`, // JWT 토큰을 Authorization 헤더에 포함
        "Content-Type": "application/json", // 요청의 데이터 형식을 JSON으로 지정
      },
    });
    return userId;
  } catch (err) {
    console.log(err);
  }
}

// jwt 토큰으로부터 userId를 받아 로그인한 유저 정보를 가져오는 비동기 함수
export async function getUserById(userId) {
  try {
    console.log("유저 id로 유저 가져오기 URL :", GET_URL);
    const { data: user } = await axios.get(`${GET_URL}/${userId}`);

    return user;
  } catch (err) {
    console.log("서버 요청 실패 :", err);
  }
}

export async function getUserByEmail(email) {
  try {
    console.log("이메일로 유저 가져오기 URL :", CHECK_URL);
    const { data: user } = await axios.post(`${CHECK_URL}`, { email });

    return user;
  } catch (err) {
    console.log("서버 요청 실패 :", err);
  }
}
