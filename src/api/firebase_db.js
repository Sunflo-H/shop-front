import {
  getDatabase,
  ref,
  set,
  get,
  remove,
  push,
  child,
  update,
} from "firebase/database";

import app from "./firebase_config";

const db = getDatabase(app); // 실시간 데이터베이스 기능 호출

export function uploadProductToFirebase(product) {
  return set(ref(db, `products/${product.category}/${product.id}`), product);
}

// export async function getProduct_url() {
//   let menProducts = await getProduct("Men");
//   let womenProducts = await getProduct("Women");

//   let menUrls = menProducts.map((product) => product.imageUrl);
//   let womenUrls = womenProducts.map((product) => product.imageUrl);

//   return menUrls.concat(womenUrls);
// }

export async function getProduct(category) {
  try {
    const snapshot = await get(ref(db, `products/${category}`));
    if (snapshot.exists()) {
      const data = snapshot.val();
      let products = Object.values(data); // data객체의 value만 가져온다.
      return products;
    }
    return [];
  } catch (error) {
    console.error(error);
  }
}
export async function getProduct_all() {
  try {
    const snapshot = await get(ref(db, `products`));
    if (snapshot.exists()) {
      const data = snapshot.val();
      let products = Object.values(data); // data객체의 value만 가져온다.
      return products;
    }
    return [];
  } catch (error) {
    console.error(error);
  }
}

export function updateProduct(key, product) {
  const updates = {};
  updates[`products/${product.category}/${key}`] = product;

  return update(ref(db), updates);
}

export function uploadCart(product, uid) {
  set(ref(db, `carts/${uid}/${product.id}`), product);
}

export async function getCart(uid) {
  try {
    const snapshot = await get(ref(db, `carts/${uid}`));

    if (snapshot.exists()) {
      const data = snapshot.val();

      let carts = Object.values(data);

      return carts;
    }
    return [];
  } catch (error) {
    console.error(error);
  }
}

export function removeCartItem(product, uid) {
  remove(ref(db, `carts/${uid}/${product.id}`));
}

export function addFavorites(product, uid) {
  set(ref(db, `favorites/${uid}/${product.id}`), product);
}

export async function getFavorites(uid) {
  try {
    const snapshot = await get(ref(db, `favorites/${uid}`));

    const data = snapshot.val();
    const products = data && Object.values(data);
    return products;
  } catch (error) {
    console.error(error);
  }
}

export function removeFavorites(product, uid) {
  remove(ref(db, `favorites/${uid}/${product.id}`));
}
