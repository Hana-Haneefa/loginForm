const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPassword = document.getElementById("CPassword");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    validateForm();
  });
} else {
  console.warn('Form element `#loginForm` not found');
}

function errorMessage(message) {
  const el = document.getElementById("errorMessage");
  if (el) el.textContent = message;
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validateForm() {
  // to clear previous error messages
  errorMessage("");

  const email = emailInput ? emailInput.value.trim() : "";
  const password = passwordInput ? passwordInput.value.trim() : "";
  const confirm = confirmPassword ? confirmPassword.value.trim() : "";

  if (!email) {
    errorMessage("Email required!");
    return false;
  }

  if (!isValidEmail(email)) {
    errorMessage("Enter valid email");
    return false;
  }

  if (!password) {
    errorMessage("Password required!");
    return false;
  }

  if (password.length < 6) {
    errorMessage("Password must contain at least 6 characters");
    return false;
  }

  if (password !== confirm) {
    errorMessage("Confirm password does not match with the Password");
    return false;
  }

  // if all validations pass
  console.log("Form is valid");
  return true;
}
