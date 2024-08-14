export function capitalize(string) {
  const firstLetter = string.slice(0, 1).toUpperCase();
  const theRest = string.slice(1);
  return `${firstLetter}${theRest}`;
}

export function reverseString(string) {
  return string.split(/(?:)/u).reverse().join("");
}

export const calculator = (() => {
  class Calculator {
    add(x, y) {
      return x + y;
    }
    subtract(x, y) {
      return x - y;
    }
    divide(x, y) {
      return x / y;
    }
    multiply(x, y) {
      return x * y;
    }
  }
  return new Calculator();
})();

export function caesarCipher(string, shiftFactor) {
  let stringList = string.split(/(?:)/u);
  const carriedShiftFactor = shiftFactor % 26;
  stringList = stringList.map((char) => {
    if (char.match(/[a-z][A-Z]/)) {
      return String.fromCharCode(char.charCodeAt(0) + carriedShiftFactor);
    }
    return char;
  });
  return stringList.join("");
}
