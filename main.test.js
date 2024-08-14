test("capitalize()", () => {
  expect(capitalize("foo").toBe("Foo"));
  expect(capitalize("bar").toBe("Bar"));
  expect(capitalize("baz").toBe("Baz"));
  expect(capitalize("kuma🐻").toBe("Kuma🐻"));
});

test("reverseString()", () => {
  expect(reverseString("lackadaisically")).toBe("yllacisiadakcal");
  expect(reverseString("quite")).toBe("etiuq");
  expect(reverseString("reverse")).toBe("esrever");
});

describe("Testing calculator object", () => {
  test("Is defined", () => {
    expect(calculator).toBeDefined();
  });
  test("add()", () => {
    expect(calculator.add(3, 5)).toBe(8);
    expect(calculator.add(10, 100)).toBe(110);
    expect(calculator.add(1024, 1024)).toBe(2048);
  });
  test("subtract()", () => {
    expect(calculator.subtract(0, 10)).toBe(-10);
    expect(calculator.subtract(64, 16)).toBe(48);
    expect(calculator.subtract(999, 111)).toBe(888);
  });
  test("divide()", () => {
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.divide(128, 2)).toBe(64);
    expect(calculator.divide(27, 3)).toBe(9);
  });
  test("multiply()", () => {
    expect(calculator.multiply(9, 9)).toBe(81);
    expect(calculator.multiply(100, 10)).toBe(1000);
    expect(calculator.multiply(8192, 2)).toBe(16384);
  });
});

test("caesarCipher()", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray()", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(analyzeArray([97, 61, 20, 94, 13, 96])).toEqual({
    average: 63,
    min: 13,
    max: 97,
    length: 6,
  });
  expect(analyzeArray([6, 65, 88, 11])).toEqual({
    average: 42,
    min: 6,
    max: 88,
    length: 4,
  });
});
