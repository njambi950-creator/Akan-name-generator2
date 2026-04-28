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
    if (day < 1 || day > 31) {
      alert("Wait! A month only has 1 to 31 days.");
      return; // This stops the code from running further
    }

    if (month < 1 || month > 12) {
      alert("There are only 12 months in a year!");
      return;
    }

    // Also check if the year is a reasonable 4-digit number
    if (year < 1000 || year > 9999) {
      alert("Please enter a valid 4-digit year.");
      return;
    }

    // 3. Create a Date object
    const birthDate = new Date(year, month - 1, day);

    // 4. Get the day of the week (0 = Sunday, 6 = Saturday)
    const dayOfWeek = birthDate.getDay();
    // 5. Name Lists
    const maleNames = [
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame",
    ];
    const femaleNames = [
      "Akosua",
      "Adwoa",
      "Abenaa",
      "Akua",
      "Yaa",
      "Afua",
      "Ama",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    // 6. Pick the name based on gender
    let akanName =
      gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];
    // 7. Show the result
    const resultDisplay = document.getElementById("result-display");
    const outputName = document.getElementById("output-name");

    outputName.innerHTML = `You were born on a ${days[dayOfWeek]}. <br> Your Akan name is <strong>${akanName}</strong>!`;
    resultDisplay.classList.remove("hidden");
  });
