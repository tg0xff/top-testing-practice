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
})

describe("Testing calculator object", () => {
  test("Is defined", () => {
    expect(calculator).toBeDefined();
  });
  test("add()", () => {
    expect(calculator.add(3, 5)).toBe(8);
    expect(calculator.add(10, 100)).toBe(110);
    expect(calculator.add(1024, 1024)).toBe(2048);
  })
  test("subtract()", () => {
    expect(calculator.subtract(0, 10)).toBe(-10);
    expect(calculator.subtract(64, 16)).toBe(48);
    expect(calculator.subtract(999, 111)).toBe(888);
  })
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
})
