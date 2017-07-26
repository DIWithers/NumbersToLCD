export class NumbersToLCD {
    static translate(input: number): string {

        let lcdTranslations: any = {
            1: ["   ",
                "  |",
                "  |"],
            2: [" _ ",
                " _|",
                "|_ "],
            3: [" _ ",
                " _|",
                " _|"]
        };

        let top: string = "";
        let middle: string = "";
        let bottom: string = "";

        for (let digit of input.toString()) {
            top += lcdTranslations[digit][0];
            middle += lcdTranslations[digit][1];
            bottom += lcdTranslations[digit][2];
        }

        return top + "\n" + middle + "\n" + bottom;

    }
}