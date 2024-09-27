import Swal from "sweetalert2";

export const alert_productUploadSuccess = () => {
  return Swal.fire({
    position: "center",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const alert_registerSuccess = () => {
  return Swal.fire({
    position: "middle",
    icon: "success",
    title: "Sign up successful! ",
    text: "Try to sign in",
    showConfirmButton: true,
    confirmButtonColor: "#000",
  });
};

export const alert_checkoutSuccess = () => {
  Swal.fire({
    icon: "success",
    title: "CHECK OUT",
    confirmButtonColor: "#222",
  });
};

export const alert_DeleteSelectedProductsSuccess = () => {
  Swal.fire({
    title: "Deleted!",
    text: "Selected Products has been deleted.",
    icon: "success",
  });
};

export const alert_deleteSuccess = () => {
  Swal.fire({
    title: "Deleted!",
    text: "Product has been deleted.",
    icon: "success",
  });
};
