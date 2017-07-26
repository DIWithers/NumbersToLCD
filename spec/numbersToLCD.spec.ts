import {NumbersToLCD} from "../src/numbersToLCD";

describe("Numbers to LCD", () => {
    function NumbersToLCDTest(input: number, expected: string): any {
        expect(NumbersToLCD.translate(input)).toBe(expected);
    }

    it("Should translate number 1 to lcd 1", () => {
        NumbersToLCDTest(1, "   \n  |\n  |" );
    });
    it("Should translate number 2 to lcd 2", () => {
       expect(NumbersToLCD.translate(2)) .toBe(" _ \n _|\n|_ ");
    });
    it("Should translate number 12 to lcd 12", () => {
       expect(NumbersToLCD.translate(12)) .toBe("    _ \n  | _|\n  ||_ ");
    });
    it("Should translate number 213 to lcd 213", () => {
       expect(NumbersToLCD.translate(213)) .toBe(" _     _ \n _|  | _|\n|_   | _|");
    });

});