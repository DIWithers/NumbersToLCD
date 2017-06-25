export class NumbersToLCD {

    static translate(input: number): string {
        if (input === 1) {
            return "   \n  |\n  |";
        }
        if (input === 2) {
            return " _ \n _|\n|_ ";
        }
        else {
            return " _ \n| |\n|_|";
        }
    }
}