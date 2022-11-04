export const splitOddAndEvenNumbers = (numbers = []) => {
    if (numbers.length < 2) return;

    const oddNumbers = [];
    const evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            return [[], []];
        }
        if (numbers[i] % 2 === 1) {
            oddNumbers.push(numbers[i])
        } else {
            evenNumbers.push(numbers[i])
        }
    };

    return [oddNumbers, evenNumbers];
};

export const getHighestOddSum = (numbers = []) => {
    if (numbers.length < 2) {
        return;
    }

    const [oddNumbers, evenNumbers] = splitOddAndEvenNumbers(numbers);

    if (oddNumbers.length === 0 || evenNumbers.length === 0) {
        return
    };

    const maxOddNumber = Math.max(...oddNumbers);
    const maxEvenNumber = Math.max(...evenNumbers);

    return maxOddNumber + maxEvenNumber;
};

export const removeConsecLetters = (string) => {
    const MAX_CONSEC_LETTERS = 3;

    if (string.length <= MAX_CONSEC_LETTERS) {
        return string;
    }

    const letters = [string[0], string[1], string[2]];

    for (let i = MAX_CONSEC_LETTERS; i < string.length; i++) {
        if (string[i] !== string[i - 1] || string[i] !== string[i - MAX_CONSEC_LETTERS]) {
            letters.push(string[i]);
        }
    }

    return letters.join('');
};