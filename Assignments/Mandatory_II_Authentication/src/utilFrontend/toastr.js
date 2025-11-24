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

export function signOutNotification (hasSignedOut)  {
  if (hasSignedOut) {
    toastr.success("Signed out");
  } else {
    toastr.error("Sign out failed");
  }
}

export function signInNotification (hasSignedIn)  {
    if (hasSignedIn) {
    toastr.success("Signed in");
  } else {
    toastr.error("Sign in failed");
  }
}