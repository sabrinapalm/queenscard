


import { splitOddAndEvenNumbers, getHighestOddSum, removeConsecLetters } from '../algorithms'

describe('utils', () => {
    describe('removeConsecLetters', () => {
        test('if less than 3 letters', () => {
            const string = 'dd';
            expect(removeConsecLetters(string)).toBe('dd')
        });
        test('"ffdtttyy" should return "ffdtttyy"', () => {
            const string = 'ffdttttyy';
            expect(removeConsecLetters(string)).toBe('ffdtttyy')
        });
        test('"iiikigggg" should return "iiikiggg"', () => {
            const string = 'iiikigggg';
            expect(removeConsecLetters(string)).toBe('iiikiggg')
        });
        test('"ffdttttyyiiikigggg" should return "ffdtttyyiiikiggg"', () => {
            const string = 'ffdttttyyiiikigggg';
            expect(removeConsecLetters(string)).toBe('ffdtttyyiiikiggg')
        });
    });

    describe('splitOddAndEvenNumbers', () => {
        test('[] should return "undefined"', () => {
            const numbersList = [];
            expect(splitOddAndEvenNumbers(numbersList)).toBe(undefined)
        })
        test('[1, 2, 3, 4, 5, 6] should return [[1, 3, 5], [2, 4, 6]]', () => {
            const numbersList = [1, 2, 3, 4, 5, 6];
            expect(splitOddAndEvenNumbers(numbersList)).toEqual([[1, 3, 5], [2, 4, 6]]);
        });
        test('[1, 3, 7, 9, 11] should return {[1, 3, 7, 9, 11], []}', () => {
            const numbersList = [1, 3, 7, 9, 11];
            expect(splitOddAndEvenNumbers(numbersList)).toEqual([[1, 3, 7, 9, 11], []]);
        });
        test('[2, 4, 6, 8, 10] should return [[], [2, 4, 6, 8, 10]]', () => {
            const numbersList = [2, 4, 6, 8, 10];
            expect(splitOddAndEvenNumbers(numbersList)).toEqual([[], [2, 4, 6, 8, 10]]);
        });
    });

    describe('getHighestOddSum - returns maximum sum of two numbers who has an odd sum', () => {
        test('[] should return "undefined"', () => {
            const numbersList = [];
            expect(getHighestOddSum(numbersList)).toBe(undefined)
        })
        test('[60, 30, 50] should return "undefined"', () => {
            const numbersList = [60, 30, 50];
            expect(getHighestOddSum(numbersList)).toBe(undefined)
        })
        test('[61, 31, 53, 63] should return "undefined"', () => {
            const numbersList = [61, 31, 53, 63];
            expect(getHighestOddSum(numbersList)).toBe(undefined)
        })
        test('[89, 98, 72, 103, 74, -2, 26] should return "undefined"', () => {
            const numbersList = [89, 98, 72, 103, 74, -2, 26];
            expect(getHighestOddSum(numbersList)).toBe(undefined)
        })
        test('[-4, -4, -4, -4] should return "undefined"', () => {
            const numbersList = [-4, -4, -4, -4];
            expect(getHighestOddSum(numbersList)).toBe(undefined)
        })
        test('[19, 2, 42, 18] should return 61', () => {
            const numbersList = [19, 2, 42, 18];
            expect(getHighestOddSum(numbersList)).toBe(61)
        })
        test('[61, 32, 51] should return 93', () => {
            const numbersList = [61, 32, 51];
            expect(getHighestOddSum(numbersList)).toBe(93)
        })
        test('[668, 669] should return 1337', () => {
            const numbersList = [668, 669];
            expect(getHighestOddSum(numbersList)).toBe(1337)
        })
    });
});