// Q6: Real-Time Table Filter using the input event
const studentSearch = document.getElementById("studentSearch");
const studentRows = document.querySelectorAll("#studentRows tr");
const noResults = document.getElementById("noResults");

studentSearch.addEventListener("input", function () {
  const searchText = studentSearch.value.trim().toLowerCase();
  let visibleCount = 0;

  studentRows.forEach(function (row) {
    const rowText = row.textContent.toLowerCase();
    const matches = rowText.includes(searchText);

    row.style.display = matches ? "" : "none";
    if (matches) visibleCount++;
  });

  noResults.style.display = visibleCount === 0 ? "block" : "none";
});
