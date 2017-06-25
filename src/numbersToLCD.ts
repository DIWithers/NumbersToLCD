export class NumbersToLCD {

    static translate(input: number): string {

        let conversionTable: any = {
            0: [" _ ",
                "| |",
                "|_|"
            ],
            1: ["   ",
                "  |",
                "  |"
            ],
            2: [" _ ",
                " _|",
                "|_ "
            ],
            3: [" _ ",
                " _|",
                " _|"
            ],
            4: ["   ",
                "|_|",
                "  |"
            ]
        }

        let top: string = "";
        let middle: string = "";
        let bottom: string = "";

        top = conversionTable[input][0];
        middle = conversionTable[input][1];
        bottom = conversionTable[input][2];

        return top + "\n" + middle + "\n" + bottom;
    }
}