// Q8: Custom Dropdown using only JavaScript (no select element)
const customDropdown = document.getElementById("customDropdown");
const dropdownToggle = document.getElementById("dropdownToggle");
const dropdownOptions = document.getElementById("dropdownOptions");
const selectedCourse = document.getElementById("selectedCourse");

dropdownToggle.addEventListener("click", function (event) {
  event.stopPropagation();
  const isOpen = dropdownOptions.style.display === "block";

  dropdownOptions.style.display = isOpen ? "none" : "block";
  dropdownToggle.setAttribute("aria-expanded", String(!isOpen));
});

dropdownOptions.addEventListener("click", function (event) {
  if (event.target.tagName !== "BUTTON") return;

  const selectedValue = event.target.getAttribute("data-value");
  dropdownToggle.textContent = `${selectedValue} ▾`;
  selectedCourse.textContent = `Selected course: ${selectedValue}`;
  dropdownOptions.style.display = "none";
  dropdownToggle.setAttribute("aria-expanded", "false");
});

// Capturing phase: this listener runs before the click reaches inner elements.
document.addEventListener("click", function (event) {
  if (!customDropdown.contains(event.target)) {
    dropdownOptions.style.display = "none";
    dropdownToggle.setAttribute("aria-expanded", "false");
  }
}, true);
