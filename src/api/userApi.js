import axios from "axios";

const GET_URL = process.env.REACT_APP_GET_USER_URL;
const UPDATE_URL = process.env.REACT_APP_UPDATE_USER_URL;
const DELETE_URL = process.env.REACT_APP_DELETE_USER_URL;
const REGISTER_URL = process.env.REACT_APP_REGISTER_URL;

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

export const fetchPagenation = async (category, status) => {
  if (category === "ALL") category = "";
  if (status === "ALL") status = "";
  const response = await axios.get(GET_URL, {
    params: { category, status },
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
