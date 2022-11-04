import { screen, render, fireEvent } from '@testing-library/react';

import Input from '../Input';

describe('Input', () => {
    test('renders correctly', async () => {
        const handleChange = jest.fn();
        const props = {
            errorMessage: '',
            id: 'id',
            label: 'label',
            maxLength: 8,
            isRequired: true
        }
        render(<Input handleChange={handleChange} {...props} />);
        expect(screen.getByText('label', { exact: false })).toBeInTheDocument();
        expect(screen.getByText('*', { exact: false })).toBeInTheDocument();

        const input = screen.getByTestId('form-input');
        expect(input).toHaveAttribute('id', 'id');
        expect(input).toHaveAttribute('maxLength', '8');

        fireEvent.change(input, { target: { value: 'John Doe' } })
        expect(handleChange).toHaveBeenCalled();
        expect(input.value).toBe('John Doe');
    })
})