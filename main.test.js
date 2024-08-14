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

describe("Testing calculator", () => {
  test("Is defined", () => {
    expect(calculator).toBeDefined();
  });
  test("add()", () => {
    expect(calculator.add(3, 5)).toBe(8);
    expect(calculator.add(10, 100)).toBe(110);
    expect(calculator.add(1024, 1024)).toBe(2048);
  })
})
