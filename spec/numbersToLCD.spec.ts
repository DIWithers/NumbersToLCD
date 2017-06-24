import {NumbersToLCD} from "../src/numbersToLCD";
describe ("Numbers To LCD", () => {
    function NumbersToLCDTranslationTest(input: number, expected: string): void {
        console.log(expected);
        expect(NumbersToLCD.translate(input)).toBe(expected);
    }
    it("Should translate 1 to lcd 1", () => {
        NumbersToLCDTranslationTest(1, "   \n  |\n  |" );
    });
    it("Should translate 2 to lcd 2", () => {
        NumbersToLCDTranslationTest(2, " _ \n _|\n|_ ");
    });
    it("Should translate 3 to lcd 3", () => {
        NumbersToLCDTranslationTest(3, " _ \n _|\n _|");
    });
    it("Should translate 4 to lcd 4", () => {
        NumbersToLCDTranslationTest(4, "   \n|_|\n  |");
    });
});