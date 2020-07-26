import similarity from "helpers/similarity";

it("Should return 0 when the parameters are not strings", () => {
  expect(similarity(1, 2)).toBe(0);
  expect(similarity(1, "")).toBe(0);
});

it("Should return 0 when the one of the parameters is not string", () => {
  expect(similarity("", 2)).toBe(0);
  expect(similarity(1, "")).toBe(0);
  expect(similarity(1, "")).toBe(0);
});

it("Should return 0 when the one of the parameters is not object", () => {
  expect(similarity("{}", 2)).toBe(0);
  expect(similarity(1, "{}")).toBe(0);
  expect(similarity(1, '{"a": 1}')).toBe(0);
});

it("Should return 1 when both the parameters are same object strings", () => {
  const testObject = {
    a: 1,
    b: [2, 4, 5],
  };
  const testObject2 = testObject;
  expect(
    similarity(JSON.stringify(testObject), JSON.stringify(testObject))
  ).toBe(1);
  expect(
    similarity(JSON.stringify(testObject), JSON.stringify(testObject2))
  ).toBe(1);
});

it("Should return less than 1 when both params are objects", () => {
  const testObject = {
    a: 1,
    b: [2, 4, 5],
  };
  const testObject2 = {
    a: 1,
    b: [2, 4, 6],
  };
  expect(
    similarity(JSON.stringify(testObject), JSON.stringify(testObject2))
  ).toBeLessThan(1);
});
