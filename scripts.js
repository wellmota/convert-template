// Get form elements
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

// Listen for input event on amount input to receive only numbers
amount.addEventListener("input", () => {
  console.log(amount.value)

  // Remove all non-numeric characters
  const hasCharactersRegex = /\D+/g

  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Listen for submit event on form
form.onsubmit = (event) => {
  event.preventDefault()

  // Get form data
  console.log(currency.value)
}
