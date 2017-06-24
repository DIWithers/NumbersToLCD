export class NumbersToLCD {
    static translate(input: number): string {
        let output: string;
        if (input === 2) {
            return " _ \n _|\n|_ ";
        }
        if (input === 3) {
            return " _ \n _|\n _|";
        }
        if (input === 4) {
            return "   \n|_|\n  |";
        }
        else {
            return "   \n  |\n  |";
        }
    }
}