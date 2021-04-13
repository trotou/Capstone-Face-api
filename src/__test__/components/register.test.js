import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RegisterForm from '../../components/RegisterForm';

const mockedHandleSubmit = jest.fn();

jest.mock('react-hook-form', () => {
    return {
        useForm: () => ({
            handleSubmit: mockedHandleSubmit,
            formState: {
                errors: {
                    username: 'mockedUsername',
                    password: 'mockedpassword',
                    email: 'mockedmail'
                }
            },
            register: jest.fn()
        })
    };
});

jest.mock('../../providers/Services', () => {
    return {
        useServices: () => ({
            registerForm: jest.fn()
        })
    };
});

describe('When submits the form', () => {
    test('Should call handleSubmit', () => {
        render(<RegisterForm />);

        const userInput = screen.getByTestId('userNameRegisterTestId');
        const passwordInput = screen.getByTestId('passwordRegisterTestId');
        const emailInput = screen.getAllByTestId('emailTestId');
        const form = screen.getByTestId('formRegisterTestId');

        userEvent.type(emailInput, 'mock@mail.com');
        userEvent.type(passwordInput, '123456');
        userEvent.type(userInput, 'user');

        fireEvent.submit(form);

        expect(mockedHandleSubmit).toHaveBeenCalled();
    });
});
