export class NumbersToLCD {
    static translate(input: number): string {
        let output: string;
        if (input === 2) {
            output = " _ \n _|\n|_ ";
        }
        else {
            output = "   \n  |\n  |";
        }
        console.log(output);
        return output;
    }
}