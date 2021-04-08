import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RegisterForm from '../../components/RegisterForm';

const mockedHandleSubmit = jest.fn();

jest.mock('react-hook-form', () => {
    return {
        useForm: () => ({
            handleSubmit: mockedHandleSubmit,
            errors: {
                username: 'mockedUsername',
                password: 'mockedPassword',
                email: 'mockedemail'
            }
        })
    };
});

jest.mock('../../components/RegisterForm', () => ({
    formState: "dasd"
}));

describe('When submits the form', () => {
    test('Should call handleSubmit', () => {
        render(<RegisterForm />);

        const userInput = screen.getByTestId('userNameRegisterTestId');
        const passwordInput = screen.getByTestId('passwordRegisterTestId');
        const emailInput = screen.getAllByTestId('emailTestId');
        const form = screen.getByTestId('formRegisterTestId');

        userEvent.type(userInput, 'user');
        userEvent.type(passwordInput, '123456');
        userEvent.type(emailInput, 'mock@mail.com');

        fireEvent.submit(form);

        expect(mockedHandleSubmit).toHaveBeenCalled();
    });
});
