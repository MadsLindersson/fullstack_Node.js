import toastr from "toastr";
import "toastr/build/toastr.min.css";

export function resetMailSendNotification(email) {
  if (!email.includes("@") || !email.includes(".")) {
    toastr.error(
      "Is not an email adress, please enter a valid email adress",
      email
    );
  } else {
    toastr.success(email, "A mail has been sent to:");
  }
}