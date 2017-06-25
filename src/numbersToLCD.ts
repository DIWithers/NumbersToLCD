export class NumbersToLCD {

    static translate(input: number): string {
        let top: string = "";
        let middle: string = "";
        let bottom: string = "";

        if (input === 1) {
            top += "   ";
            middle += "  |";
            bottom += "  |";
            return top + "\n" + middle + "\n" + bottom;
        }
        if (input === 2) {
            top += " _ ";
            middle += " _|";
            bottom += "|_ ";
            return top + "\n" + middle + "\n" + bottom;
        }
        if (input === 3) {
            top += " _ ";
            middle += " _|";
            bottom += " _|";
            return top + "\n" + middle + "\n" + bottom;
        }
        else {
            return " _ \n| |\n|_|";
        }
    }
}