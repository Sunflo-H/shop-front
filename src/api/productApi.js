import axios from "axios";

const GET_URL = process.env.REACT_APP_GET_PRODUCT_URL;
const UPDATE_URL = process.env.REACT_APP_UPDATE_PRODUCT_URL;
const DELETE_URL = process.env.REACT_APP_DELETE_PRODUCT_URL;

export const fetchProducts = async (category, status, page, limit) => {
  if (category === "ALL") category = "";
  if (status === "ALL") status = "";
  const response = await axios.get(GET_URL, {
    params: { category, status, page, limit },
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

export const deleteProduct = async (id) => {
  const response = await axios.post(`${DELETE_URL}/${id}`);
  return response.data;
};

export const deleteManyProducts = async (id, productToUpdate) => {
  const response = await axios.post(`${DELETE_URL}/${id}`, productToUpdate);
  return response.data;
};
