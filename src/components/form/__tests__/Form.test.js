import { screen, render, fireEvent } from '@testing-library/react';

import Form from '../Form';

describe('Form', () => {
    test('renders correctly', () => {
        const child = <div>Child</div>;
        const onSubmit = jest.fn(e => e.preventDefault());
        const props = {
            isSuccess: false,
            isLoading: false
        }
        render(<Form onSubmit={onSubmit} {...props} >{child}</Form>);
        expect(screen.getByText('Child')).toBeInTheDocument();
        expect(screen.getByText('Submit')).toBeInTheDocument();
        const submitButton = screen.getByTestId('form-submit-button');
        fireEvent.click(submitButton);
        expect(onSubmit).toHaveBeenCalled();
    })
})