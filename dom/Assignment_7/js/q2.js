// Q2: Live Character Counter with Warning Behavior
const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");
const maximumCharacters = 100;

function updateCounter() {
  const remaining = maximumCharacters - message.value.length;
  counter.textContent = `${remaining} characters remaining`;

  // Yellow warning when 20 or fewer characters are left.
  if (remaining <= 20 && remaining > 0) {
    counter.style.color = "#ca8a04";
  } else if (remaining === 0) {
    counter.style.color = "#dc2626";
  } else {
    counter.style.color = "#64748b";
  }
}

// preventDefault() blocks additional printable characters at the limit.
message.addEventListener("keydown", function (event) {
  const isEditingKey = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Home", "End"].includes(event.key);
  const isShortcut = event.ctrlKey || event.metaKey;

  if (message.value.length >= maximumCharacters &&
      !isEditingKey && !isShortcut && event.key.length === 1) {
    event.preventDefault();
  }
});

message.addEventListener("input", updateCounter);

resetButton.addEventListener("click", function () {
  message.value = "";
  updateCounter();
  message.focus();
});

updateCounter();
