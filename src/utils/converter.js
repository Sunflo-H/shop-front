/**
 * 상품의 가격에 ,를 추가하는 format함수
 * @param {*} number
 * @returns
 */
export function formatPrice(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//! 주석 returns에 앞에 뭐라도 있어야 value 가 보임 없으면 :"숏네임" 만 보임
/**
 * 사이즈를 받아 그 사이즈의 {숏네임, 풀네임} 객체를 리턴하는 함수
 * @param {*} size
 * @returns {ㅁ value:"숏네임" , label:"풀네임" }
 */
export function formatSize(size) {
  const sizeOptionList = [
    { value: "XX", label: "XX-Small" },
    { value: "XS", label: "X-Small" },
    { value: "S", label: "Small" },
    { value: "M", label: "Medium" },
    { value: "L", label: "Large" },
    { value: "XL", label: "X-Large" },
    { value: "XXL", label: "XX-Large" },
    { value: "2X", label: "2X" },
    { value: "3X", label: "3X" },
  ];

  return sizeOptionList.find((sizeOption) => sizeOption.value === size);
}
