export function getJwtWithExpiry(key) {
  const itemStr = localStorage.getItem(key);

  // 값이 없으면 null 반환
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  // 만료 시간이 지난 경우 localStorage에서 해당 아이템 삭제 후 null 반환
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return item.value;
}

export function setJwtWithExpiry(key, value, ttl) {
  const now = new Date();

  // 만료 시간을 ttl(밀리초)로 계산해서 저장
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };

  localStorage.setItem(key, JSON.stringify(item));
}
