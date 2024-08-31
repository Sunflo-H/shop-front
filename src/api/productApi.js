import axios from "axios";

const URL = process.env.REACT_APP_GET_PRODUCT_URL;

export const fetchProducts = async (category, status, page, limit) => {
  if (category === "ALL") category = "";
  if (status === "ALL") status = "";
  const response = await axios.get(URL, {
    params: { category, status, page, limit },
  });
  return response.data;
};

export const updateProduct = async (id, productToUpdate) => {
  const response = await axios.post(`${URL}/${id}`, productToUpdate);
  return response.data;
};
