/**
 *
 * @param {*} file
 * @returns data.url
 *
 * 상품을 등록할때 사용하는 함수
 * - 이미지파일을 Cloudinary에 업로드한다.
 * - 업로드한 이미지의 url을 return한다.
 */
export async function imageUploadAndGetUrl(file) {
  const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload`;
  const formData = new FormData();
  formData.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY);
  formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
  formData.append("file", file);

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  return data.url;
}
