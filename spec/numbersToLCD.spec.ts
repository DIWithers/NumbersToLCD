import {NumbersToLCD} from "../src/numbersToLCD";
describe ("Numbers To LCD", () => {
    function NumbersToLCDTranslationTest(input: number, expected: string): void {
        console.log(expected);
        expect(NumbersToLCD.translate(input)).toBe(expected);
    }
    it("Should translate 0 to lcd 0", () => {
        NumbersToLCDTranslationTest(0, " _ \n| |\n|_|" );
    });
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
    it("Should translate 5 to lcd 5", () => {
        NumbersToLCDTranslationTest(5, " _ \n|_ \n _|");
    });
    it("Should translate 6 to lcd 6", () => {
        NumbersToLCDTranslationTest(6, " _ \n|_ \n|_|");
    });
    it("Should translate 7 to lcd 7", () => {
        NumbersToLCDTranslationTest(7, " _ \n  |\n  |");
    });
    it("Should translate 8 to lcd 8", () => {
        NumbersToLCDTranslationTest(8, " _ \n|_|\n|_|");
    });
});