export class NumbersToLCD {
    static translate(inputAsIndex: number): string {
        let translationArray: any = [
            " _ \n| |\n|_|",
            "   \n  |\n  |",
            " _ \n _|\n|_ ",
            " _ \n _|\n _|",
            "   \n|_|\n  |",
            " _ \n|_ \n _|"
        ]
        return translationArray[inputAsIndex];
    }
}