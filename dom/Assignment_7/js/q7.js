// Q7: Detect Mouse Path and Coordinates Logger
const mouseBox = document.getElementById("mouseBox");
const coordinates = document.getElementById("coordinates");

mouseBox.addEventListener("mousemove", function (event) {
  // clientX and clientY are coordinates relative to the browser viewport.
  coordinates.textContent = `clientX: ${event.clientX} | clientY: ${event.clientY}`;
});

mouseBox.addEventListener("dblclick", function (event) {
  const boxRectangle = mouseBox.getBoundingClientRect();
  const dot = document.createElement("span");

  dot.className = "dot";
  // Convert viewport coordinates into positions inside the box.
  dot.style.left = `${event.clientX - boxRectangle.left}px`;
  dot.style.top = `${event.clientY - boxRectangle.top}px`;

  mouseBox.appendChild(dot);
});
