// Q9: Form Submit Blocker with preventDefault() and Live Errors
const signupForm = document.getElementById("signupForm");
const signupName = document.getElementById("signupName");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");
const submitMessage = document.getElementById("submitMessage");

const formFields = [
  { input: signupName, error: document.getElementById("signupNameError") },
  { input: signupEmail, error: document.getElementById("signupEmailError") },
  { input: signupPassword, error: document.getElementById("signupPasswordError") }
];

let submitAttempted = false;

function validateField(field) {
  const value = field.input.value.trim();
  let message = "";

  if (field.input === signupName && !value) {
    message = "Name is required.";
  } else if (field.input === signupEmail && !value) {
    message = "Email is required.";
  } else if (field.input === signupEmail && !value.includes("@")) {
    message = "Email must contain @.";
  } else if (field.input === signupPassword && value.length < 6) {
    message = "Password must be at least 6 characters.";
  }

  field.error.textContent = message;
  return message === "";
}

signupForm.addEventListener("submit", function (event) {
  // Stop the browser from sending/reloading the form.
  event.preventDefault();
  submitAttempted = true;
  submitMessage.textContent = "";

  const allValid = formFields.every(validateField);

  if (allValid) {
    submitMessage.textContent = "Form Submitted Successfully";
    signupForm.reset();
    submitAttempted = false;
  }
});

// As the user corrects a field, its error is removed immediately.
formFields.forEach(function (field) {
  field.input.addEventListener("input", function () {
    if (submitAttempted) {
      validateField(field);
      submitMessage.textContent = "";
    }
  });
});
