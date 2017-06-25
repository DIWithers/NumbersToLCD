import {NumbersToLCD} from "../src/numbersToLCD";

describe ("Numbers To LCD", () => {
 it("Should convert number 0 to LCD display of 0", () => {
  expect(NumbersToLCD.translate(0)).toBe(" _ \n| |\n|_|");
 });
});