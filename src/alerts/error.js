import Swal from "sweetalert2";

export const alert_requireError = (value) => {
  const text = `${value.join(", ")} is required`;
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: text,
  });
};

export const alert_registerError = (errMassage) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `${errMassage}`,
    confirmButtonColor: "black",
  });
};
