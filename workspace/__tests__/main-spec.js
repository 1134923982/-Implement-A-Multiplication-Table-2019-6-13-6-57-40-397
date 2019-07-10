const main = require('../main');
const startNumberSmallerThanEndNumber = main.startNumberSmallerThanEndNumber;
const isInRangeOf1To1000 = main.isInRangeOf1To1000;
const createMultiplicationEquation = main.createMultiplicationEquation;
const outputMultiplicationTable = main.outputMultiplicationTable;

// let str="2*2    \n" +
//     "2*3    3*3    \n";

it ('should return true when start number is smaller than end number', () => {
    expect(startNumberSmallerThanEndNumber(2, 3)).toBe(true);
});
it ('should return false when end number is smaller than start number', () => {
    expect(startNumberSmallerThanEndNumber(4, 3)).toBe(false);
});
it ('should return true when start number is equal end number', () => {
    expect(startNumberSmallerThanEndNumber(2, 2)).toBe(true);
});

it ('should return true when start number and end number between 1 to 1000', () => {
    expect(isInRangeOf1To1000(1, 1000)).toBe(true);
});

it ('should return false when start number and end number not in the 1-1000 range', () => {
    expect(isInRangeOf1To1000(1, 1001)).toBe(false);
});

it ('should return false when start number and end number not in the 1-1000 range', () => {
    expect(isInRangeOf1To1000(0, 1000)).toBe(false);
});

it ('should return "2*2    \n' +
    '    2*3    3*3    \n" when start number and end number between 1 to 1000', () => {
    expect(createMultiplicationEquation(2,3)).toBe("2*2    \n" +
        "2*3    3*3    \n");
});

it ('should return "2*2    \n' +
    '    2*3    3*3     +\n' +
    '        "2*4    3*4    4*4    \n" when start number and end number between 1 to 1000', () => {
    expect(createMultiplicationEquation(2,4)).toBe("2*2    \n" +
        "2*3    3*3    \n" +
        "2*4    3*4    4*4    \n");
});
it ('should return "2*2    \n' +
    '    2*3    3*3    \n" +\n' +
    '        "2*4    3*4    4*4    \n" when start number and end number between 1 to 1000', () => {
    expect(outputMultiplicationTable(2,4)).toBe("2*2    \n" +
        "2*3    3*3    \n" +
        "2*4    3*4    4*4    \n");
});

it ('should return null when start number and end number between 1 to 1000', () => {
    expect(outputMultiplicationTable(5,4)).toBe(null);
});