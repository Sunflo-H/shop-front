/**
 * 상품의 가격에 ,를 추가하는 format함수
 * @param {*} number
 * @returns
 */
export function formatPrice(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
