export const isDateInPast = (date) => {
    if (date.match(/^\d{4}-\d{2}-\d{2}$/) === null) {
        return;
    }
    return new Date(date).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0);
};

export const removeWhiteSpaceFromString = (string) => string.replace(/\s/g, '');

export const isNumberKey = (event) => {
    if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
    }
};

export const isLetterKey = (event) => {
    if (!/^[A-ZÅÄÖa-zåäö\s]*$/.test(event.key)) {
        event.preventDefault();
    }
};

export const checkCardType = (cardNumber) => {
    const cards = {
        amex: /^3[47][0-9]{0,}$/,
        diners: /^3(?:0[0-59]{1}|[689])[0-9]{0,}$/,
        discover: /^(6011|65|64[4-9]|62212[6-9]|6221[3-9]|622[2-8]|6229[01]|62292[0-5])[0-9]{0,}$/,
        jcb: /^(?:2131|1800|35)[0-9]{0,}$/,
        mastercard: /^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$/,
        visa: /^4[0-9]{0,}$/,
    };

    for (let key in cards) {
        if (cards[key].test(removeWhiteSpaceFromString(cardNumber))) {
            return key.charAt(0).toUpperCase() + key.slice(1);
        }
    }
};

export const validateForm = ({
    cardNumber,
    cardName,
    expiryMonth,
    expiryYear,
    cvv,
}) => {
    const errors = {};

    if (!cardNumber) {
        errors.cardNumber = 'Card number is required';
    } else if (!/[0-9]{14,16}/.test(removeWhiteSpaceFromString(cardNumber))) {
        errors.cardNumber = 'Enter a valid credit card number';
    }

    if (!cardName) {
        errors.cardName = 'Card name is required';
    } else if (!/^[a-zA-ZåäöÅÄÖ]+ [a-zA-ZåäöÅÄÖ]+$/.test(cardName)) {
        errors.cardName = 'Name is invalid';
    }

    if (!expiryMonth) {
        errors.expiryMonth = 'Expiry month is required';
    }

    if (!expiryYear) {
        errors.expiryYear = 'Expiry year is required';
    }

    let today = new Date().getDate();
    const date = `${expiryYear}-${expiryMonth}-${today > 10 ? today : '0' + today}`;
    if (isDateInPast(date)) {
        errors.expiryMonth = 'Expiry date has passed';
    }

    if (!cvv) {
        errors.cvv = 'CVV is required';
    } else if (!/[0-9]{3,4}/.test(cvv)) {
        errors.cvv = 'CVV is invalid';
    }

    return errors;
};
