import { add } from "./calculator";

it("add corrrectly", () => {
  expect(add(3, 5)).toBe(8);
});
