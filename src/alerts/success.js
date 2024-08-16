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
    title: "Registration successful! ",
    text: "Redirecting HomePage",
    showConfirmButton: true,
    ConfirmButtonColor: "black",
  });
};

// export const alert_loginSuccess = () => {
//   return Swal.fire({
//     position: "middle",
//     icon: "success",
//     title: "Sign in successful! ",
//     text: "Redirecting HomePage",
//     showConfirmButton: true,
//     ConfirmButtonColor: "black",
//   });
// };
