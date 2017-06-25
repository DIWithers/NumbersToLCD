import {NumbersToLCD} from "../src/numbersToLCD";

describe ("Numbers To LCD", () => {
 it("Should convert number 0 to LCD display of 0", () => {
  expect(NumbersToLCD.translate(0)).toBe(" _ \n| |\n|_|");
 });
 it("Should convert number 1 to LCD display of 1", () => {
  expect(NumbersToLCD.translate(1)).toBe("   \n  |\n  |");
 });
 it("Should convert number 2 to LCD display of 2", () => {
  expect(NumbersToLCD.translate(2)).toBe(" _ \n _|\n|_ ");
 });
 it("Should convert number 3 to LCD display of 3", () => {
  expect(NumbersToLCD.translate(3)).toBe(" _ \n _|\n _|");
 });
});