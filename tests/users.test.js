function sum(a, b) {
  return a + b;
}

test('Default test: adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
