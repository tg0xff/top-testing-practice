import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./main.js";

describe("capitalize()", () => {
  test("Testing with string 'foo'", () => {
    expect(capitalize("foo")).toBe("Foo");
  });
  test("Testing with string 'kuma🐻'", () => {
    expect(capitalize("kuma🐻")).toBe("Kuma🐻");
  });
});

describe("reverseString()", () => {
  test("Testing with string 'lackadaisically'", () => {
    expect(reverseString("lackadaisically")).toBe("yllacisiadakcal");
  });
  test("Testing with string 'kuma🐻'", () => {
    expect(reverseString("kuma🐻")).toBe("🐻amuk");
  });
});

describe("Testing calculator object", () => {
  describe("add()", () => {
    test("Test 1024 + 1024", () => {
      expect(calculator.add(1024, 1024)).toBe(2048);
    });
  });
  describe("subtract()", () => {
    test("Test 0 - 10", () => {
      expect(calculator.subtract(0, 10)).toBe(-10);
    });
  });
  describe("divide()", () => {
    test("Test 128 / 2", () => {
      expect(calculator.divide(128, 2)).toBe(64);
    });
  });
  describe("multiply()", () => {
    test("Test 8192 * 2", () => {
      expect(calculator.multiply(8192, 2)).toBe(16384);
    });
  });
});

describe("caesarCipher()", () => {
  test("Test (xyz, 3)", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  test("Test (Hello, World!, 3)", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});

describe("analyzeArray()", () => {
  test("Test [1, 8, 3, 4, 2, 6]", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
  test("Test [97, 61, 20, 94, 13, 96]", () => {
    expect(analyzeArray([97, 61, 20, 94, 13, 96])).toEqual({
      average: 63,
      min: 13,
      max: 97,
      length: 6,
    });
  });
});
