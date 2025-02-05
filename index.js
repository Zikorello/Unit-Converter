/* ELEMENTS */

const inputField = document.querySelector("#input-field")
const convertBtn = document.querySelector("#convert-btn")
const unitLength = document.querySelector("#length-field")
const unitVolume = document.querySelector("#volume-field")
const unitMass = document.querySelector("#mass-field")

/* RATIOS */
const length = 3.281 // 1 meter = 3.281 feet
const volume = 0.264 // 1 liter = 0.264 gallon
const mass = 2.204 // 1 kilogram = 2.204 pound

/* CONVERTION */
    
/* Equation */
function unitEquation(input, unit1, unit2, ratio) {
    return`${input} ${unit1} = ${(input*ratio).toFixed(2)} ${unit2} | ${input} ${unit2} = ${(input/ratio).toFixed(2)} ${unit1}` 
}

/* Convertion */
function unitConverter() {
let input = Number(inputField.value) // Number() also converts exponents to whole numbers (2e2 = 200), and displays them in the output field.
if (input) {  // Don't want anything to happen, if nothing has been input yet.
    unitLength.innerHTML = unitEquation(input, "meters", "feet", length)
    unitVolume.innerHTML = unitEquation(input, "liters", "gallons", volume)
    unitMass.innerHTML = unitEquation(input, "kilos", "pounds", mass)
    }
}

/* Button */

convertBtn.addEventListener("click", function() {
    unitConverter()
    inputField.value = "" // Clears the input field after clicking the button.
    inputField.style.width = (inputField.value.length + 1) + "ch" // Clears the width after last convertion
    }
)

/* FUNCTIONALITY */

/* Input width */

inputField.style.width = (inputField.value.length + 1) + "ch"
inputField.value.length = 3

inputField.addEventListener("input", function() {
    this.style.width = (this.value.length + 1) + "ch" // Adjusts the width according to the length of the text. Error: If the exponent exceeds three digits, the width collapses. After adding the truncation, the conversion doesn't work at all if the exponent exceeds four digits:(.
    if (inputField.value.length > 8) {
    inputField.value = inputField.value.slice(0, 8); // Truncate to 8 digits
    this.style.width = (this.value.length + 1) + "ch" // Prevent field from extending after truncation.
  }
})



/* LIGHT/DARK MODE with inspiration from Per´s 'Build a personal website' */

const lightMode = document.querySelector(".switch input")
const body = document.body
const container = document.querySelector("#unit-container")
const h2 = document.querySelector("h2")
const p = document.querySelector("p")

lightMode.addEventListener("click", () => {
    body.classList.toggle("light-mode")
})