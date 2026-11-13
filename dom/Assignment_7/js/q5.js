// Q5: Image Gallery with Modal Preview
const gallery = document.getElementById("gallery");
const imageModal = document.getElementById("imageModal");
const modalContent = document.getElementById("modalContent");
const largeImage = document.getElementById("largeImage");

gallery.addEventListener("click", function (event) {
  if (event.target.tagName !== "IMG") return;

  // Display the same image in the modal at a larger size.
  largeImage.src = event.target.src;
  largeImage.alt = event.target.alt;
  imageModal.style.display = "flex";
});

// Clicking the dark background closes the modal.
imageModal.addEventListener("click", function () {
  imageModal.style.display = "none";
  largeImage.src = "";
});

// Stop the click from bubbling to the modal background.
modalContent.addEventListener("click", function (event) {
  event.stopPropagation();
});
