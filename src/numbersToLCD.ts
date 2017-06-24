export class NumbersToLCD {
    static translate(input: number): string {
        let output: string;
        let two: any = {
                top: " _ \n",
                middle: " _|\n",
                bottom: "|_ "
            }
        if (input === 2) {
            return two.top + two.middle + two.bottom;
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