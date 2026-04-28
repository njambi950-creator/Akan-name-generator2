document
  .getElementById("akan-form")
  .addEventListener("submit", function (event) {
    // Prevent the form from refreshing the page
    event.preventDefault();

// 1. Retrieve users input (Fixed typos in getElementById)
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    const gender = document.querySelector(
      'input[name="gender"]:checked',
    )?.value;
