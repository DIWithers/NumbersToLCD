import {NumbersToLCD} from "../src/numbersToLCD";

describe ("Numbers To LCD", () => {
    function NumbersToLCDTest(input: number, expected: string): void {
        expect(NumbersToLCD.translate(input)).toBe(expected);
    }
 it("Should convert number 0 to LCD display of 0", () => {
     NumbersToLCDTest(0, " _ \n| |\n|_|" );
 });
 it("Should convert number 1 to LCD display of 1", () => {
     NumbersToLCDTest(1, "   \n  |\n  |");
 });
 it("Should convert number 2 to LCD display of 2", () => {
     NumbersToLCDTest(2, " _ \n _|\n|_ ");
 });
 it("Should convert number 3 to LCD display of 3", () => {
     NumbersToLCDTest(3, " _ \n _|\n _|");
 });
 it("Should convert number 4 to LCD display of 4", () => {
     NumbersToLCDTest(4, "   \n|_|\n  |");
 });
 it("Should convert number 5 to LCD display of 5", () => {
     NumbersToLCDTest(5, " _ \n|_ \n _|");
 });
 it("Should convert number 6 to LCD display of 6", () => {
     NumbersToLCDTest(6, " _ \n|_ \n|_|");
 });
 it("Should convert number 7 to LCD display of 7", () => {
     NumbersToLCDTest(7, " _ \n  |\n  |");
 });
 it("Should convert number 8 to LCD display of 8", () => {
     NumbersToLCDTest(8, " _ \n|_|\n|_|");
 });
 it("Should convert number 9 to LCD display of 9", () => {
     NumbersToLCDTest(9, " _ \n|_|\n _|");
 });
});