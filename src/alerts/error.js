import Swal from "sweetalert2";

export const alert_requireError = (value) => {
  const text = `${value.join(", ")} is required`;
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: text,
  });
};
