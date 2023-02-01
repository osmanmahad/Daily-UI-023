const select = document.querySelector("#airlines");
const info = document.querySelector("#airline-info");
const colorBox = document.querySelector("#color-box");
const logo_pic = document.querySelector("#logo");
const pass_ = document.querySelector(".pass");
const details = document.querySelector(".details");
const plane = document.querySelector(".fa-plane");

select.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  let logo, name, color;

  switch (selectedValue) {
    case "":
      logo = "&nbsp";
      name = "&nbsp";
      color = "black";
      break;
    case "ac":
      logo =
        "https://upload.wikimedia.org/wikipedia/commons/2/24/Air_Canada_Logo.svg";
      name = "Air Canada";
      color = "red";
      break;
    case "dl":
      logo =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Delta_logo.svg/1280px-Delta_logo.svg.png?20181218211006";
      name = "Delta Airlines";
      color = "#003B7A";
      break;
    case "qa":
      logo =
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Qatar_Airways_logo.svg";
      name = "Qatar Airways";
      color = "#630039";
      break;
    case "sa":
      logo =
        "https://upload.wikimedia.org/wikipedia/commons/9/9d/Singapore_Airlines_Logo.svg";
      name = "Singapore Airlines";
      color = "#174687";
      break;
    case "em":
      logo =
        "https://upload.wikimedia.org/wikipedia/commons/a/a2/Emirates_SkyCargo_Logo.svg";
      name = "Emirates";
      color = "#D71920";
      break;
    case "qn":
      logo =
        "https://upload.wikimedia.org/wikipedia/commons/9/91/Qantas_Airways_Limited_logo_1947%E2%80%931968.svg";
      name = "Qantas Airways";
      color = "#E21F26";
      break;
    case "ta":
      logo =
        "https://upload.wikimedia.org/wikipedia/commons/8/8c/Turkish_Airlines_logo_2019.svg";
      name = "Qatar Airways";
      color = "#C80304";
      break;
    case "af":
      logo =
        "https://upload.wikimedia.org/wikipedia/commons/9/9f/Air-France-Logo_Skyteam.svg";
      name = "Air France";
      color = "#000836";
      break;
    case "ka":
      logo =
        "https://upload.wikimedia.org/wikipedia/commons/8/8f/KoreanAir_logo.svg";
      name = "Korean Air";
      color = "#154D9E";
      break;
    case "si":
      logo =
        "https://upload.wikimedia.org/wikipedia/commons/1/1d/Swiss_new.svg";
      name = "Swiss International Air Lines";
      color = "#CD0000";
      break;
    // Add more cases for the remaining airlines
  }

  plane.style.color = color;

  logo_pic.innerHTML = `
      <img class="logo" src="${logo}" alt="${name}">
      `;

  colorBox.style.backgroundColor = color;
});

const name_input = document.querySelector("#name_input");
const name_output = document.querySelector("#name_output");

name_input.addEventListener("input", (event) => {
  name_output.innerHTML = event.target.value;
});

const airportsSelect_airrival = document.querySelector(
  "#airports-select-airrival"
);
const airportName_airrival = document.querySelector("#airport-name-airrival");
const airportCode_airrival = document.querySelector("#airport-code-airrival");

airportsSelect_airrival.addEventListener("change", (event) => {
  const selectedOption = event.target.options[event.target.selectedIndex];
  const [name, code] = selectedOption.text.split(" (");

  airportName_airrival.innerHTML = name;
  airportCode_airrival.innerHTML = code.slice(0, -1);
});

const airportsSelect_departure = document.querySelector(
  "#airports-select-departure"
);
const airportName_departure = document.querySelector("#airport-name-departure");
const airportCode_departure = document.querySelector("#airport-code-departure");

airportsSelect_departure.addEventListener("change", (event) => {
  const selectedOption = event.target.options[event.target.selectedIndex];
  const [name, code] = selectedOption.text.split(" (");

  airportName_departure.innerHTML = name;
  airportCode_departure.innerHTML = code.slice(0, -1);
});

const flightTypesSelect = document.querySelector("#flight-types-select");
const selectedFlightType = document.querySelector("#selected-flight-type");

flightTypesSelect.addEventListener("change", (event) => {
  selectedFlightType.innerHTML = event.target.value;
});

const seatsSelect = document.querySelector("#seats-select");
const selectedSeat = document.querySelector("#selected-seat");

seatsSelect.addEventListener("change", (event) => {
  selectedSeat.innerHTML = event.target.value;
});

const startTimeSelect = document.querySelector("#start-time-select");
const endTimeSelect = document.querySelector("#end-time-select");
const startTimeDiv = document.querySelector("#start-time");
const endTimeDiv = document.querySelector("#end-time");

startTimeSelect.addEventListener("change", () => {
  const startTime =
    startTimeSelect.value.slice(0, 2) + ":" + startTimeSelect.value.slice(2);
  startTimeDiv.innerHTML = `${startTime}`;
});

endTimeSelect.addEventListener("change", () => {
  const endTime =
    endTimeSelect.value.slice(0, 2) + ":" + endTimeSelect.value.slice(2);
  endTimeDiv.innerHTML = `${endTime}`;
});

const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", () => {
  const inputs = document.querySelectorAll("input, select");
  inputs.forEach((input) => {
    input.value = "";
  });
});
