test("capitalize()", () => {
  expect(capitalize("foo").toBe("Foo"));
  expect(capitalize("bar").toBe("Bar"));
  expect(capitalize("baz").toBe("Baz"));
  expect(capitalize("kuma🐻").toBe("Kuma🐻"));
});
