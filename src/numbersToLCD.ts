export class NumbersToLCD {
    static translate(input: number): string {
        let translationArray: any = [
            [0, " _ \n| |\n|_|"],
            [1, "   \n  |\n  |" ],
            [2, " _ \n _|\n|_ "],
            [3, " _ \n _|\n _|"],
            [4, "   \n|_|\n  |"],
            [5, " _ \n|_ \n _|"]
        ]
        return translationArray[input][1];
    }
}