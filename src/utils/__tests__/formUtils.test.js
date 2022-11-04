import { isDateInPast, checkCardType, removeWhiteSpaceFromString, validateForm } from '../formUtils';

describe('formUtils', () => {
    describe('isDateInPast - returns true if date is in past time', () => {
        test('when invalid date input - returns undefined', () => {
            const inputDate = '';
            expect(isDateInPast(inputDate)).toBe(undefined)
        });
        test('when date is in past - returns true', () => {
            const inputDate = '2022-01-01';
            expect(isDateInPast(inputDate)).toBe(true)
        });
        test('when date is NOT in past - returns false', () => {
            const inputDate = '2026-01-01';
            expect(isDateInPast(inputDate)).toBe(false)
        });
    });

    describe('validateForm - validates user form values', () => {
        test('when values are empty - returns `required` errors correctly', () => {
            const formValues = {
                cardNumber: '',
                cardName: '',
                expiryMonth: '',
                expiryYear: '',
                cvv: ''
            }
            expect(validateForm(formValues)).toEqual({
                "cardName": "Card name is required",
                "cardNumber": "Card number is required",
                "cvv": "CVV is required",
                "expiryMonth": "Expiry month is required",
                "expiryYear": "Expiry year is required"
            })
        });

        test('when cardNumber is less than 14 digits - returns correct error', () => {
            const formValues = {
                cardNumber: '1234 5678 9101',
                cardName: 'John Doe',
                expiryMonth: '05',
                expiryYear: '2026',
                cvv: '123'
            }
            expect(validateForm(formValues).cardNumber).toEqual("Enter a valid credit card number")
        });
        test('when cardName is not valid - returns correct error', () => {
            const formValues = {
                cardNumber: '1234 5678 9101 1234',
                cardName: 'fnsrgjk',
                expiryMonth: '05',
                expiryYear: '2026',
                cvv: '123'
            }
            expect(validateForm(formValues).cardName).toEqual("Name is invalid")
        });
        test('when expiryDate is in past - returns correct error', () => {
            const formValues = {
                cardNumber: '1234 5678 9101 1234',
                cardName: 'John Doe',
                expiryMonth: '01',
                expiryYear: '2022',
                cvv: '123'
            }
            expect(validateForm(formValues).expiryMonth).toEqual("Expiry date has passed")
        });
        test('when cvv is less than 3 digits - returns correct error', () => {
            const formValues = {
                cardNumber: '1234 5678 9101 1234',
                cardName: 'John Doe',
                expiryMonth: '05',
                expiryYear: '2026',
                cvv: '1'
            }
            expect(validateForm(formValues).cvv).toEqual("CVV is invalid")
        });
    });

    describe('checkCardType - returns card type', () => {
        test('returns visa', () => {
            const inputDate = '4012 8888 8888 1881';
            expect(checkCardType(inputDate)).toBe('Visa')
        });
        test('returns mastercard', () => {
            const inputDate = '5105 1051 0510 5100';
            expect(checkCardType(inputDate)).toBe('Mastercard')
        });
        test('returns maestro', () => {
            const inputDate = '6011 1111 1111 1117';
            expect(checkCardType(inputDate)).toBe('Discover')
        });
        test('returns diners', () => {
            const inputDate = '3056 9309 0259 04';
            expect(checkCardType(inputDate)).toBe('Diners')
        });
        test('returns amex', () => {
            const inputDate = '3782 8224 6310 005';
            expect(checkCardType(inputDate)).toBe('Amex')
        });
        test('returns jcb', () => {
            const inputDate = '3530 1113 3330 0000';
            expect(checkCardType(inputDate)).toBe('Jcb')
        });
    });

    describe('removeWhiteSpaceFromString - returns card type', () => {
        test('returns string without whitespace', () => {
            const string = '4012 8888 8888 1881';
            expect(removeWhiteSpaceFromString(string)).toBe('4012888888881881')
        });
    });
})