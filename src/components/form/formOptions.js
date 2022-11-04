export const monthOptions = [
    { label: '01', value: '01' },
    { label: '02', value: '02' },
    { label: '03', value: '03' },
    { label: '04', value: '04' },
    { label: '05', value: '05' },
    { label: '06', value: '06' },
    { label: '07', value: '07' },
    { label: '08', value: '08' },
    { label: '09', value: '09' },
    { label: '10', value: '10' },
    { label: '11', value: '11' },
    { label: '12', value: '12' },
];

export const yearOptions = [
    { label: '2022', value: '2022' },
    { label: '2023', value: '2023' },
    { label: '2024', value: '2024' },
    { label: '2025', value: '2025' },
    { label: '2026', value: '2026' },
    { label: '2027', value: '2027' },
];

export const initialFormState = {
    cardName: '',
    cardNumber: '',
    cardType: '',
    cvv: '',
    expiryMonth: '',
    expiryYear: '',
    errors: {},
    isLoading: false,
    isSubmitted: false
}

export const filledFormState = {
    cardName: 'Jane Doe',
    cardNumber: '6011 1111 1111 1117',
    cardType: 'Discover',
    cvv: '1337',
    expiryMonth: '07',
    expiryYear: '2026',
    errors: {},
    isLoading: false,
    isSubmitted: false
}
