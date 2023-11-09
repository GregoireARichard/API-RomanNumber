import intToRomanService from "../services/intToRoman.service";

const error = "Number must be positive or integer or below 3999"

test("Success - intToRoman", () => {
  expect(intToRomanService.intToRoman(14)).toBe("XIV");
});
test("Success - intToRoman over 1000", () => {
  expect(intToRomanService.intToRoman(3006)).toBe("MMMVI");
});
test("Fail - intToRoman 0", () => {
  expect(() => intToRomanService.intToRoman(0)).toThrow(error);
});

test("Fail - intToRoman negative number", () => {
  expect(() => intToRomanService.intToRoman(-1)).toThrow(error);
});
test("Fail - intToRoman negative number", () => {
  expect(() => intToRomanService.intToRoman(1.5)).toThrow(error);
});
test("Fail - intToRoman negative number", () => {
  expect(() => intToRomanService.intToRoman(4000)).toThrow(error);
});
