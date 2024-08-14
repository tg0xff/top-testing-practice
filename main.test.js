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
