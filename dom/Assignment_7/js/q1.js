// Q1: Dynamic Product List Manager using event delegation
const productForm = document.getElementById("productForm");
const productInput = document.getElementById("productInput");
const productList = document.getElementById("productList");

let itemBeingEdited = null;
let originalItemText = "";

// Save the current inline edit.
function saveEdit() {
  if (!itemBeingEdited) return;

  const editInput = itemBeingEdited.querySelector(".edit-input");
  const newName = editInput.value.trim();

  if (newName) {
    // Keep the updated product name and recreate its action buttons.
    itemBeingEdited.firstChild.textContent = newName + " ";
  } else {
    itemBeingEdited.firstChild.textContent = originalItemText + " ";
  }

  itemBeingEdited = null;
}

// Add a product to the list.
productForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const productName = productInput.value.trim();

  if (!productName) return;

  const listItem = document.createElement("li");
  listItem.append(document.createTextNode(productName + " "));

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.className = "small edit-btn";
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "small danger delete-btn";
  deleteButton.textContent = "Delete";

  listItem.append(editButton, deleteButton);
  productList.appendChild(listItem);
  productInput.value = "";
  productInput.focus();
});

// One click listener on the parent UL handles every Edit and Delete button.
productList.addEventListener("click", function (event) {
  const clickedButton = event.target;

  if (clickedButton.classList.contains("delete-btn")) {
    if (itemBeingEdited === clickedButton.parentElement) saveEdit();
    clickedButton.parentElement.remove();
  }

  if (clickedButton.classList.contains("edit-btn")) {
    const listItem = clickedButton.parentElement;

    if (itemBeingEdited && itemBeingEdited !== listItem) saveEdit();
    if (itemBeingEdited === listItem) return;

    itemBeingEdited = listItem;
    originalItemText = listItem.firstChild.textContent.trim();

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.className = "edit-input";
    editInput.value = originalItemText;
    editInput.style.width = "auto";
    editInput.style.maxWidth = "55%";

    listItem.firstChild.textContent = "";
    listItem.insertBefore(editInput, listItem.firstChild);
    editInput.focus();
    editInput.select();
  }
});

// Clicking outside the item automatically saves the edit.
document.addEventListener("click", function (event) {
  if (itemBeingEdited && !itemBeingEdited.contains(event.target)) {
    saveEdit();
  }
});

// Pressing Enter or leaving the edit input also saves the changes.
productList.addEventListener("keydown", function (event) {
  if (event.target.classList.contains("edit-input") && event.key === "Enter") {
    saveEdit();
  }
});
