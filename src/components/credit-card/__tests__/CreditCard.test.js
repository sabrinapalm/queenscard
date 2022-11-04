import { screen, render } from '@testing-library/react';

import CreditCard from '../CreditCard';

describe('CreditCard', () => {
    test('renders correctly', () => {
        const props = {
            cardNumber: '1234 1234 1234 1234',
            cardType: 'Visa',
            cardName: 'John Doe',
            expiryMonth: '07',
            expiryYear: '2026',
            cvv: '1234'
        }
        render(<CreditCard {...props} />);
        expect(screen.getByText('1234 1234 1234 1234')).toBeInTheDocument();
        expect(screen.getAllByText('Visa')[0]).toBeInTheDocument();
        expect(screen.getAllByText('John Doe')[0]).toBeInTheDocument();
        expect(screen.getByText('07/2026')).toBeInTheDocument();
        expect(screen.getByText('1234')).toBeInTheDocument();
    })
    test('when some values are missing - renders correctly', () => {
        const props = {
            cardNumber: '1234 1234 1234 1234',
            cardName: 'John Doe',
            cardType: '',
            expiryMonth: '',
            expiryYear: '',
            cvv: ''
        }
        render(<CreditCard {...props} />);
        expect(screen.queryByText('Visa')).not.toBeInTheDocument();
        expect(screen.queryByText('07/2026')).not.toBeInTheDocument();
        expect(screen.queryByText('1234')).not.toBeInTheDocument();
    })
})