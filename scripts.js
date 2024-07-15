const amount = document.getElementById("amount")

// Listen for input event on amount input to receive only numbers
amount.addEventListener("input", () => {
  console.log(amount.value)

  // Remove all non-numeric characters
  const hasCharactersRegex = /\D+/g
  
  amount.value = amount.value.replace(hasCharactersRegex, "")


})
