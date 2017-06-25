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
});