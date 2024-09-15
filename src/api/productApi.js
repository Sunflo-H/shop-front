import axios from "axios";

const GET_URL = process.env.REACT_APP_GET_PRODUCT_URL;
// const GET_URL = "http://13.124.80.0/api/product";
// const GET_URL_HTTPS = "https://13.124.80.0/api/product";
const UPDATE_URL = process.env.REACT_APP_UPDATE_PRODUCT_URL;
const DELETE_URL = process.env.REACT_APP_DELETE_PRODUCT_URL;
const CREATE_URL = process.env.REACT_APP_CREATE_PRODUCT_URL;

export const getProducts = async (
  category,
  status,
  page,
  limit,
  searchQuery
) => {
  if (category === "ALL") category = "";
  if (status === "ALL") status = "";

  try {
    console.log("상품들 주소 :", GET_URL);
    const response = await axios.get(GET_URL, {
      params: { category, status, page, limit, searchQuery },
    });
    return response.data;
  } catch (err) {
    console.log("https 실패");
  }
};

export const fetchPagenation = async (category, status, searchQuery) => {
  if (category === "ALL") category = "";
  if (status === "ALL") status = "";
  console.log("페이지네이션 URL :", GET_URL);
  const response = await axios.get(GET_URL, {
    params: { category, status, searchQuery },
  });
  return response.data;
};

export const updateProduct = async (productToUpdate) => {
  console.log("업데이트 URL :", UPDATE_URL);

  const response = await axios.post(
    `${UPDATE_URL}/${productToUpdate._id}`,
    productToUpdate
  );
  return response.data;
};

export const deleteProducts = async (idList) => {
  console.log("삭제 URL :", DELETE_URL);

  try {
    const response = await axios.delete(DELETE_URL, { data: idList });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const uploadProduct = async (uploadProduct) => {
  console.log("상품등록 URL :", CREATE_URL);
  try {
    const response = await axios.post(CREATE_URL, uploadProduct);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
