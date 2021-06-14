formSubmit.addEventListener("click", function (event) {
  event.preventDefault();
});

const ytLink = document.getElementById("ytLink");
const cb = document.getElementById("cb");

// Prevents the default behavior occuring for an event
ytLink.addEventListener("click", function (e) {
  if (!cb.checked) {
    e.preventDefault();
  }
});
