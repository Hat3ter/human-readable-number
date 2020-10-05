module.exports = function toReadable(number) {
    const HUNDRED_DELIMITER = 'hundred';
    const SPACE = ' ';
    let result = '';
    const strNumber = number.toString();

    let oneToTen = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten'
    };

    let elevenToTwenty = {
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen',
        0: 'twenty',
    };

    let dozens = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };

    if (number >= 0 && number <= 10) {
        return oneToTen[number];
    }

    if (number > 10 && number < 21) {
        return elevenToTwenty[strNumber[1]];
    }

    if (number > 20 && number < 100) {
        if (strNumber[1] === "0") {
            return dozens[strNumber[0]];
        } else {
            return `${dozens[strNumber[0]]}${SPACE}${oneToTen[strNumber[1]]}`;
        }
    }

    if (number > 99 && number < 1000) {
        if (strNumber[1] === "0" && strNumber[2] === "0")
            return `${oneToTen[strNumber[0]]}${SPACE}${HUNDRED_DELIMITER}`;
        if (strNumber[1] === "0")
            return `${oneToTen[strNumber[0]]}${SPACE}${HUNDRED_DELIMITER}${SPACE}${oneToTen[strNumber[2]]}`;
        if (strNumber[1] === "1" && strNumber[2] === '0')
            return `${oneToTen[strNumber[0]]}${SPACE}${HUNDRED_DELIMITER}${SPACE}ten`;
        if (strNumber[1] === "1")
            return `${oneToTen[strNumber[0]]}${SPACE}${HUNDRED_DELIMITER}${SPACE}${elevenToTwenty[strNumber[2]]}`;
        if (strNumber[2] === "0")
            return `${oneToTen[strNumber[0]]}${SPACE}${HUNDRED_DELIMITER}${SPACE}${dozens[strNumber[1]]}`;
        else
            return `${oneToTen[strNumber[0]]}${SPACE}${HUNDRED_DELIMITER}${SPACE}${dozens[strNumber[1]]}${SPACE}${oneToTen[strNumber[2]]}`;
    }

    return result;
};

