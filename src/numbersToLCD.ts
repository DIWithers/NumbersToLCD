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
            5: [" _ ",
                "|_ ",
                " _|"
            ],
            6: [" _ ",
                "|_ ",
                "|_|"
            ],
            7: [" _ ",
                "  |",
                "  |"
            ],
            8: [" _ ",
                "|_|",
                "|_|"
            ],
            9: [" _ ",
                "|_|",
                " _|"
            ]
        }

        let top: string = "";
        let middle: string = "";
        let bottom: string = "";

        for (let digit of input.toString()) {
            top += conversionTable[digit][0];
            middle += conversionTable[digit][1];
            bottom += conversionTable[digit][2];
        }

        return top + "\n" + middle + "\n" + bottom;
    }
}