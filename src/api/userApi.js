import axios from "axios";

const GET_URL = process.env.REACT_APP_GET_USER_URL;
const UPDATE_URL = process.env.REACT_APP_UPDATE_USER_URL;
const DELETE_URL = process.env.REACT_APP_DELETE_USER_URL;
const REGISTER_URL = process.env.REACT_APP_REGISTER_URL;

export const fetchUsers = async (role, page, limit, searchQuery) => {
  console.log(role, page, limit, searchQuery);
  if (role === "ALL") role = "";

  const response = await axios.get(GET_URL, {
    params: { role, page, limit, searchQuery },
  });

  return response.data;
};

export const registerUser = async (newData) => {
  try {
    console.log(newData);
    const { emailLocal, emailDomain } = newData;
    console.log(emailLocal, emailDomain);
    const email = emailLocal + "@" + emailDomain;
    console.log(email);

    const newUser = { ...newData, email };
    console.log(newUser);
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

export const updateProduct = async (productToUpdate) => {
  const response = await axios.post(
    `${UPDATE_URL}/${productToUpdate._id}`,
    productToUpdate
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
