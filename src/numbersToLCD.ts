export class NumbersToLCD {
    static translate(input: number): string {
        let output: string = "   \n  |\n  |";
        if (input === 2) {
            output = " _ \n _|\n|_ ";
        }
        console.log(output);
        return output;
    }
}