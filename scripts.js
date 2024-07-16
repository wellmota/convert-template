// Daily currency exchange rates
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Get form elements
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")

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
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// Function to convert currency

function convertCurrency(amount, price, symbol) {
  try {
    // Show currency selected
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Apply conversion
    footer.classList.add("show-result")
  } catch (error) {
    // Show error message
    footer.classList.remove("show-result")
    console.error(error)
    alert("Currency not available now, try later")
  }
}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}
