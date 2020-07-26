import isJSON from "helpers/isJSON";

it("Should return true for empty JSON object strings", () => {
  expect(isJSON("{}")).toBe(true);
});

it("Should return true for valid JSON strings", () => {
  expect(isJSON('{ "a": 1 } ')).toBe(true);
});

it("Should return false for invalid JSON strings", () => {
  expect(isJSON("")).toBe(false);
  expect(isJSON("{a")).toBe(false);
  expect(isJSON("a}")).toBe(false);
});

it("Should return false for input which are not strings", () => {
  expect(isJSON(0)).toBe(false);
  expect(isJSON(true)).toBe(false);
  expect(isJSON(false)).toBe(false);
  expect(isJSON(undefined)).toBe(false);
});
