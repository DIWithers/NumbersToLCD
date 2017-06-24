export class NumbersToLCD {
    static translate(input: number): string {
        let output: string;
        let two: any = {
                top: " _ \n",
                middle: " _|\n",
                bottom: "|_ "
            }
        let array: any = [
            [0, " _ \n| |\n|_|"],
            [1, "   \n  |\n  |" ],
            [2, " _ \n _|\n|_ "],
            [3, " _ \n _|\n _|"],
            [4, "   \n|_|\n  |"]
        ]
        return array[input][1];
    }
}