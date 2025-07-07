// Validates a credit card number using the Luhn algorithm
const validateCred = (arr) => {
  // Reverse the array to process digits from right to left
  const reversedArr = [...arr].reverse();

  // Use reduce to sum all the digits after applying Luhn rules
  const sum = reversedArr.reduce((acc, num, i) => {
    // If index is odd (originally even position), double the digit
    // If result > 9, subtract 9 (equivalent to summing the digits)
    const value = i % 2 === 1 ? (num * 2 > 9 ? num * 2 - 9 : num * 2) : num;
    return acc + value;
  }, 0);

  // Valid if total modulo 10 is 0
  return sum % 10 === 0;
};

// Filters out and returns all invalid card numbers from a batch
const findInvalidCards = (arr) => {
  return arr.filter((element) => {
    return !validateCred(element); // Keep only invalid cards
  });
};

// Identifies the companies that issued invalid card numbers
const idInvalidCardCompanies = (arr) => {
  const result = [];

  // Helper to add company name only if it's not already included
  const add = (company) => {
    if (!result.includes(company)) result.push(company);
  };

  for (const element of arr) {
    // Check the first digit to determine the company
    switch (element[0]) {
      case 3:
        add("Amex");
        break;
      case 4:
        add("Visa");
        break;
      case 5:
        add("Mastercard");
        break;
      case 6:
        add("Discover");
        break;
      default:
        console.log("Company not found");
        break;
    }
  }

  return result;
};

// Converts a card number string into an array of digits
const cardNumberToArray = (cardNumber) => {
  return cardNumber.split("").map(Number);
};

// Takes an invalid card number and adjusts it to make it valid
const fixInvalidCardNumber = (arr) => {
  // If already valid, return the array unchanged
  if (validateCred(arr)) return arr;

  // Reverse the array to process it like in validateCred
  const reversed = [...arr].reverse();

  // Calculate the total sum using Luhn algorithm logic
  const sum = reversed.reduce((acc, num, i) => {
    const val = i % 2 === 1 ? (num * 2 > 9 ? num * 2 - 9 : num * 2) : num;
    return acc + val;
  }, 0);

  // Calculate how much to add to reach next multiple of 10
  const remainder = sum % 10;
  const difference = 10 - remainder;

  // Adjust the first digit (originally the last) to fix the checksum
  reversed[0] = (reversed[0] + difference) % 10;

  // Return the fixed array in original order
  return reversed.reverse();
};
