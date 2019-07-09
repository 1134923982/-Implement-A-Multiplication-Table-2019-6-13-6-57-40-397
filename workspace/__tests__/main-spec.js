const main = require('../main');
const startParameterSmallerThanEndParameter = main.startParameterSmallerThanEndParameter;
const isInRangeOf1To1000 = main.isInRangeOf1To1000;
const createMultiplicationEquation = main.createMultiplicationEquation;

// let str="2*2    \n" +
//     "2*3    3*3    \n";

it ('should return true when start number is smaller than end number', () => {
    expect(startParameterSmallerThanEndParameter(2, 3)).toBe(true);
});
it ('should return false when end number is smaller than start number', () => {
    expect(startParameterSmallerThanEndParameter(4, 3)).toBe(false);
});
it ('should return true when start number is equal end number', () => {
    expect(startParameterSmallerThanEndParameter(2, 2)).toBe(true);
});

it ('should return true when start number and end number between 1 to 1000', () => {
    expect(isInRangeOf1To1000(10, 200)).toBe(true);
});

it ('should return false when start number and end number not in the 1-1000 range', () => {
    expect(isInRangeOf1To1000(2, 2000)).toBe(false);
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
    '    2*3    3*3    \n" +\n' +
    '        "2*4    3*4    4*4    \n" when start number and end number between 1 to 1000', () => {
    expect(createMultiplicationEquation(2,4)).toBe("2*2    \n" +
        "2*3    3*3    \n" +
        "2*4    3*4    4*4    \n");
});