
import romanToIntService from "../services/romanToInt.service";

const errorString = "Must be a roman number or inferior to 3999";

test("Success - romanToInt", () => {
  expect(romanToIntService.romanToInt("XIV")).toBe(14);
});
test("Success - romanToInt over 1000", () => {
  expect(romanToIntService.romanToInt("MMMVI")).toBe(3006);
});
test("Success - romanToInt O", () => {
    expect(romanToIntService.romanToInt("O")).toBe(0);
  });
test("Fail - intToRoman 0", () => {
  expect(() => romanToIntService.romanToInt("PO")).toThrow(errorString);
});

