import {NumbersToLCD} from "../src/numbersToLCD";
describe ("Numbers To LCD", () => {
    it("Should translate 1 to lcd 1", () => {
        expect(NumbersToLCD.translate(1)).toBe("   \n  |\n  |");
    });
    it("Should translate 2 to lcd 2", () => {
        expect(NumbersToLCD.translate(2)).toBe(" _ \n _|\n|_ ");
    });
});