import axios from "axios";

const GET_URL = process.env.REACT_APP_GET_USER_URL;
const UPDATE_URL = process.env.REACT_APP_UPDATE_USER_URL;
const DELETE_URL = process.env.REACT_APP_DELETE_USER_URL;
const REGISTER_URL = process.env.REACT_APP_REGISTER_URL;
const LOGIN_URL = process.env.REACT_APP_LOGIN_URL;
const ADDCART_URL = process.env.REACT_APP_ADD_CART_URL;

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

// 유저 데이터에 cart 정보가 있기 때문에 유저를 업데이트한다.
// productToAddCart = { id, color, size, quantity }
// export const addCart = async ({ user, productToAddCart }) => {
export const addCart = async ({ userId, productToAddCart }) => {
  try {
    const { data } = await axios.post(
      `${ADDCART_URL}/${userId}`,
      productToAddCart
    );
    return data;
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

export async function getLoginedUserByJWT(token) {
  try {
    const { data } = await axios.get(
      "http://localhost:8080/api/protected-route",
      {
        headers: {
          Authorization: `Bearer ${token}`, // JWT 토큰을 Authorization 헤더에 포함
          "Content-Type": "application/json", // 요청의 데이터 형식을 JSON으로 지정
        },
      }
    );
    return data;
  } catch (error) {
    console.log("jwt fetch error");
  }
}
