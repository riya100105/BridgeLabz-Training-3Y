// Q4: Theme Switcher using attribute manipulation
const themeButtons = document.querySelectorAll("[data-theme-choice]");
const themeStatus = document.getElementById("themeStatus");

themeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedTheme = button.getAttribute("data-theme-choice");

    // setAttribute() stores the selected theme in a custom body attribute.
    document.body.setAttribute("data-theme", selectedTheme);

    // Remove old theme classes and add the selected theme class.
    document.body.classList.remove("theme-light", "theme-dark", "theme-blue");
    document.body.classList.add(`theme-${selectedTheme}`);

    themeStatus.textContent = `Current theme: ${selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)}`;
  });
});
