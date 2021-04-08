import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LoginForm from '../../components/LoginForm';

const mockedHandleSubmit = jest.fn();

jest.mock('react-hook-form', () => {
    return {
        useForm: () => ({
            handleSubmit: mockedHandleSubmit,
            errors: {
                username: 'mockedUsername',
                password: 'mockedPassword'
            }
        })
    };
});

jest.mock('../../components/LoginForm', () => ({
    formState: 'something fake'
}));

describe('When submits the form', () => {
    test('Should call handleSubmit', () => {
        render(<LoginForm />);

        const userInput = screen.getByTestId('userNameTestId');
        const passwordInput = screen.getByTestId('passwordTestId');
        const form = screen.getByTestId('formTestId');

        userEvent.type(userInput, 'user');
        userEvent.type(passwordInput, '123456');

        fireEvent.submit(form);

        expect(mockedHandleSubmit).toHaveBeenCalled();
    });
});
