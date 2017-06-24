import {NumbersToLCD} from "../src/numbersToLCD";
describe ("Numbers To LCD", () => {
    it("Should translate 1 to lcd 1", () => {
        expect(NumbersToLCD.translate(1)).toBe("   \n  |\n  |");
    });
});