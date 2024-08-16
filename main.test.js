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
  test("Testing with string 'bar'", () => {
    expect(capitalize("bar")).toBe("Bar");
  });
  test("Testing with string 'baz'", () => {
    expect(capitalize("baz")).toBe("Baz");
  });
  test("Testing with string 'kuma🐻'", () => {
    expect(capitalize("kuma🐻")).toBe("Kuma🐻");
  });
});

describe("reverseString()", () => {
  test("Testing with string 'lackadaisically'", () => {
    expect(reverseString("lackadaisically")).toBe("yllacisiadakcal");
  });
  test("Testing with string 'quite'", () => {
    expect(reverseString("quite")).toBe("etiuq");
  });
  test("Testing with string 'reverse'", () => {
    expect(reverseString("reverse")).toBe("esrever");
  });
  test("Testing with string 'kuma🐻'", () => {
    expect(reverseString("kuma🐻")).toBe("🐻amuk");
  });
});

describe("Testing calculator object", () => {
  test("Is defined", () => {
    expect(calculator).toBeDefined();
  });
  describe("add()", () => {
    test("Test 3 + 5", () => {
      expect(calculator.add(3, 5)).toBe(8);
    });
    test("Test 10 + 100", () => {
      expect(calculator.add(10, 100)).toBe(110);
    });
    test("Test 1024 + 1024", () => {
      expect(calculator.add(1024, 1024)).toBe(2048);
    });
  });
  describe("subtract()", () => {
    test("Test 0 - 10", () => {
      expect(calculator.subtract(0, 10)).toBe(-10);
    });
    test("Test 64 - 16", () => {
      expect(calculator.subtract(64, 16)).toBe(48);
    });
    test("Test 999 - 111", () => {
      expect(calculator.subtract(999, 111)).toBe(888);
    });
  });
  describe("divide()", () => {
    test("Test 10 / 2", () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });
    test("Test 128 / 2", () => {
      expect(calculator.divide(128, 2)).toBe(64);
    });
    test("Test 27 / 3", () => {
      expect(calculator.divide(27, 3)).toBe(9);
    });
  });
  describe("multiply()", () => {
    test("Test 9 * 9", () => {
      expect(calculator.multiply(9, 9)).toBe(81);
    });
    test("Test 100 * 10", () => {
      expect(calculator.multiply(100, 10)).toBe(1000);
    });
    test("Test 8192 * 2", () => {
      expect(calculator.multiply(8192, 2)).toBe(16384);
    });
  });
});

describe("caesarCipher()", () => {
  test("Test (xyz, 3)", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  test("Test (HeLLo, 3)", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
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
  test("Test [6, 65, 88, 11]", () => {
    expect(analyzeArray([6, 65, 88, 11])).toEqual({
      average: 42,
      min: 6,
      max: 88,
      length: 4,
    });
  });
});
