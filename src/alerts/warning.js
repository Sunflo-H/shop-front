import Swal from "sweetalert2";

export const alert_productUploadCancel = () => {
  return Swal.fire({
    title: " Are you sure you want to cancel?",
    text: "Your entered information will be lost",
    icon: "warning",
    showCancelButton: true,
    // confirmButtonColor: "#3085d6",
    confirmButtonColor: "#28a745",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
    cancelButtonText: "No, I will not cancel.",
  });
};
