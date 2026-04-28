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

    // 2. Validation
    if (!year || !month || !day || !gender) {
      alert("Please fill in all fields!");
      return;
    }
// 3. Create a Date object
    const birthDate = new Date(year, month - 1, day);
