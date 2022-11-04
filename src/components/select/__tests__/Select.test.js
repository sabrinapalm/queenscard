import { screen, render, fireEvent } from '@testing-library/react';

import Select from '../Select';

describe('Select', () => {
    test('renders correctly', async () => {
        const handleChange = jest.fn();
        const props = {
            defaultValue: 'defaultOption',
            errorMessage: '',
            id: 'id',
            label: 'label',
            options: [
                { label: '01', value: '01' },
                { label: '02', value: '02' },
                { label: '03', value: '03' }
            ],
            isRequired: true
        }
        render(<Select handleChange={handleChange} {...props} />);
        expect(screen.getByText('label', { exact: false })).toBeInTheDocument();
        expect(screen.getByText('*', { exact: false })).toBeInTheDocument();

        const input = screen.getByTestId('form-select');
        expect(input).toHaveAttribute('id', 'id');
        expect(input).toHaveAttribute('name', 'id');

        const defaultOption = screen.getAllByRole('option')[0];
        const option1 = screen.getAllByRole('option')[1];
        const option2 = screen.getAllByRole('option')[2];
        const option3 = screen.getAllByRole('option')[3];
        expect(defaultOption).toBeInTheDocument();
        expect(defaultOption.value).toBe("defaultOption");
        expect(option1).toBeInTheDocument();
        expect(option1.value).toBe("01");
        expect(option2).toBeInTheDocument();
        expect(option2.value).toBe("02");
        expect(option3).toBeInTheDocument();
        expect(option3.value).toBe("03");

        fireEvent.change(input, { target: { value: '02' } });
        expect(handleChange).toHaveBeenCalled();
    })
})