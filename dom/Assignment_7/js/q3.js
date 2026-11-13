// Q3: Multi-Step Form with Next/Back and Validation
const steps = document.querySelectorAll(".form-step");
const stepIndicator = document.getElementById("stepIndicator");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const summary = document.getElementById("summary");
const multiStepForm = document.getElementById("multiStepForm");
let currentStep = 0;

const fields = [
  document.getElementById("fullName"),
  document.getElementById("email"),
  document.getElementById("password")
];

const errorElements = [
  document.getElementById("nameError"),
  document.getElementById("emailError"),
  document.getElementById("passwordError")
];

function validateCurrentStep() {
  const value = fields[currentStep].value.trim();
  let errorMessage = "";

  if (!value) {
    errorMessage = "This field is required.";
  } else if (currentStep === 1 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    errorMessage = "Please enter a valid email address.";
  } else if (currentStep === 2 && value.length < 6) {
    errorMessage = "Password must contain at least 6 characters.";
  }

  errorElements[currentStep].textContent = errorMessage;
  return errorMessage === "";
}

function showStep() {
  steps.forEach((step, index) => {
    step.hidden = index !== currentStep;
  });

  stepIndicator.textContent = `Step ${currentStep + 1} of 3`;
  backButton.hidden = currentStep === 0;
  nextButton.textContent = currentStep === 2 ? "Finish" : "Next";
}

nextButton.addEventListener("click", function () {
  if (!validateCurrentStep()) return;

  if (currentStep < 2) {
    currentStep++;
    showStep();
  } else {
    multiStepForm.hidden = true;
    stepIndicator.hidden = true;
    summary.hidden = false;
    document.getElementById("summaryText").textContent =
      `Name: ${fields[0].value.trim()} | Email: ${fields[1].value.trim()} | Password: ${"*".repeat(fields[2].value.length)}`;
  }
});

backButton.addEventListener("click", function () {
  if (currentStep > 0) {
    errorElements[currentStep].textContent = "";
    currentStep--;
    showStep();
  }
});

fields.forEach((field, index) => {
  field.addEventListener("input", function () {
    if (index === currentStep) errorElements[index].textContent = "";
  });
});

document.getElementById("restartButton").addEventListener("click", function () {
  multiStepForm.reset();
  fields.forEach((field, index) => {
    field.value = "";
    errorElements[index].textContent = "";
  });
  currentStep = 0;
  multiStepForm.hidden = false;
  stepIndicator.hidden = false;
  summary.hidden = true;
  showStep();
});

showStep();
