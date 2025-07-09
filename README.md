# 💳 Credit Card Validator

This project is part of the **Full Stack Engineer Career Path** on Codecademy.  
It demonstrates the use of JavaScript fundamentals to validate credit card numbers using the **Luhn algorithm**, identify the companies that issued invalid cards, and even correct invalid numbers.

## 📘 Project Overview

In this challenge, I built a credit card validation system that:

- Validates credit card numbers using the Luhn algorithm.
- Filters out invalid card numbers from a batch.
- Identifies the credit card companies responsible for the invalid numbers.
- Fixes invalid card numbers by adjusting the checksum digit.

## 🧠 Concepts Practiced

- Array methods: `map()`, `filter()`, `reduce()`, `includes()`
- Looping through nested arrays
- The Luhn algorithm (mod 10 checksum)
- Data transformation with `split("")` and `Number`
- Writing modular and readable code
- Defensive programming and data validation

## 🛠️ Functions Included

### `validateCred(arr)`

Checks if a credit card number (given as an array of digits) is valid using the Luhn algorithm.

### `findInvalidCards(batch)`

Takes a nested array of card numbers and returns only the invalid ones.

### `idInvalidCardCompanies(invalidCards)`

Receives invalid card numbers and returns an array with the names of the companies that issued them, based on the first digit.

### `cardNumberToArray(cardNumber)`

Converts a credit card number string into an array of individual digits as numbers.

### `fixInvalidCardNumber(arr)`

Takes an invalid card number (as an array) and adjusts the check digit to make it valid according to the Luhn algorithm.

## 🧪 Example Usage

```js
const card = "4539677908016809";
const cardArr = cardNumberToArray(card);
console.log(validateCred(cardArr)); // false

const fixed = fixInvalidCardNumber(cardArr);
console.log(validateCred(fixed)); // true
console.log(fixed); // Corrected number
```

## 🧰 Tech Used

- JavaScript (ES6+)
- Node.js (for testing via terminal)

## 🚀 How to Run

1. Clone or download this repo.
2. Make sure [Node.js](https://nodejs.org/) is installed.
3. Create a file like `script.js` and paste the functions.
4. Run using:

```bash
node script.js
```

---

## 🙌 Credits

This project was created as part of [Codecademy's Full Stack Engineer Career Path](https://www.codecademy.com/career-journey/full-stack-engineer) and applies skills from JavaScript fundamentals.
