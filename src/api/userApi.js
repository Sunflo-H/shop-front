import axios from "axios";

const GET_URL = process.env.REACT_APP_GET_USER_URL;
const UPDATE_URL = process.env.REACT_APP_UPDATE_USER_URL;
const DELETE_URL = process.env.REACT_APP_DELETE_USER_URL;
const REGISTER_URL = process.env.REACT_APP_REGISTER_URL;
const LOGIN_URL = process.env.REACT_APP_LOGIN_URL;
const AUTH_URL = process.env.REACT_APP_AUTH_URL;

export const fetchUsers = async (role, page, limit, searchQuery) => {
  if (role === "ALL") role = "";

  const response = await axios.get(GET_URL, {
    params: { role, page, limit, searchQuery },
  });

  return response.data;
};

export const registerUser = async (newData) => {
  try {
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
  if (role === "ALL") role = "";

  const response = await axios.get(GET_URL, {
    params: { role, searchQuery },
  });
  return response.data;
};

export const updateUser = async (userToUpdate) => {
  console.log(userToUpdate);
  const response = await axios.post(
    `${UPDATE_URL}/${userToUpdate._id}`,
    userToUpdate
  );
  return response.data;
};

export const deleteUser = async (idList) => {
  try {
    const response = await axios.delete(DELETE_URL, { data: idList });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export async function login(email, password) {
  try {
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
    const { data: userId } = await axios.get(AUTH_URL, {
      headers: {
        Authorization: `Bearer ${token}`, // JWT 토큰을 Authorization 헤더에 포함
        "Content-Type": "application/json", // 요청의 데이터 형식을 JSON으로 지정
      },
    });
    return userId;
  } catch (error) {
    console.log("jwt fetch error");
  }
}

// jwt 토큰으로부터 userId를 받아 로그인한 유저 정보를 가져오는 비동기 함수
export async function getUserById(userId) {
  try {
    const { data: user } = await axios.get(`${GET_URL}/${userId}`);

    return user;
  } catch (err) {
    console.log("서버 요청 실패 :", err);
  }
}
