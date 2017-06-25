export class NumbersToLCD {
    static translate(inputAsIndex: number): string {
        let translationArray: any = [
            " _ \n| |\n|_|",
            "   \n  |\n  |",
            " _ \n _|\n|_ ",
            " _ \n _|\n _|",
            "   \n|_|\n  |",
            " _ \n|_ \n _|",
            " _ \n|_ \n|_|",
            " _ \n  |\n  |",
            " _ \n|_|\n|_|"
        ]
        let translationTable: any = {
            0: [" _ ",
                "| |",
                "|_|"],
        }
        let top: string = "";
        let middle: string = "";
        let bottom: string = "";

        //map alternative?
        top += translationTable[0][0];
        middle += translationTable[0][1];
        bottom += translationTable[0][2];
        return top + "\n" + middle + "\n" + bottom;
    }
}