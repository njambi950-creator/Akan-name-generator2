// test if console works
console.log("JS is connected");

document
  .getElementById("akan-form")
  .addEventListener("submit", function (event) {
    // eventlistener tells the browser to wait until user clicks submit button
    // 1. Stop the form from submitting and refreshing the page
    event.preventDefault();

    // 2. Get the values entered by the user
    let dateOfBirthInput = document.getElementById("day")?.value;
    let genderInput = document.querySelector(
      // query selector is more specific
      //here used bcz searching for 2 elements in radio button, and check if its checked
      'input[name="gender"]:checked',
    )?.value;
    //returns undefined if the value is not found rather than crashing the whole code

    // 3. Validation
    if (!dateOfBirthInput || !genderInput) {
      alert("Please enter a valid date and select your gender.");
      return;
      //! means not so if there is no dob or gender input, show results in the curly braces
    }

    let date = new Date(dateOfBirthInput);
    //turns string into data object
    if (isNaN(date.getTime())) {
      // when the code runs and the milliseconds calculated do not make sense according to Unix Epock(01/01/1970)
      //it is not a number hence brings this response
      alert("Please enter a valid date.");
      return;
    }

    // 4. Extract date components
    let DD = date.getDate();
    let MM = date.getMonth() + 1;
    //january is 0
    let YYYY = date.getFullYear();
    let CC = Math.floor(YYYY / 100); //century quotient, math floor=truncate
    let YY = YYYY % 100; //year of century-remainder(modulo)

    // 5. Calculate the day of the week (d)
    let d =
      Math.floor(
        CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD,
      ) % 7;
    //cc/4 -2...calendar adjusts pattern every 400 years, so were looking for the century were in
    //26 hadi 10 ..months arent same length, 2.6 is the constant for the difference
    //5 yy/4 accounting for leap years
    //dd.. day of the month
    //%7..getting remainder

    // 6. Fix negative values
    if (d < 0) d += 7;
    //if output returns less than 0 add 7 to fit (0-6)

    // 7. Define names and days
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let maleNames = [
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame",
    ];
    let femaleNames = [
      "Akosua",
      "Adwoa",
      "Abenaa",
      "Akua",
      "Yaa",
      "Afua",
      "Ama",
    ];

    let dayName = days[d];
    let akanName;

    // 8. Determine name based on gender
    if (genderInput === "male") {
      akanName = maleNames[d];
    } else {
      akanName = femaleNames[d];
    }

    // 9. Display the result
    document.getElementById("output-name").innerText =
      "You were born on a " + dayName + ". Your Akan name is " + akanName + ".";
    //filling in the empty h2

    alert("Your Akan name is " + akanName + "!");

    document.getElementById("result-display").classList.remove("hidden");
  });
