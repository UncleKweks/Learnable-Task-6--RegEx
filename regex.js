function validateCreditCardNumber(cardNumber, cardType) {
  cardNumber = cardNumber.replace(/[\s-]/g, "");

  if (cardType === "Visa" && cardNumber.length !== 16) {
    return false;
  } else if (cardType === "Mastercard" && cardNumber.length !== 16) {
    return false;
  }

  if (!/^\d+$/.test(cardNumber)) {
    return false;
  }

  let sum = 0;
  let double = false;
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i), 10);

    if (double) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    double = !double;
  }

  return sum % 10 === 0;
}

let visaNumber = "4231 1859 2222 3567";
console.log("Visa:", validateCreditCardNumber(visaNumber, "Visa"));

let mastercardNumber = "5500-0000-0000-0004";
console.log(
  "Mastercard:",
  validateCreditCardNumber(mastercardNumber, "Mastercard")
);
