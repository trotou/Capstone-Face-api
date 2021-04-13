import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LoginForm from '../../components/LoginForm';

const mockedHandleSubmit = jest.fn();

jest.mock('react-hook-form', () => {
    return {
        useForm: () => ({
            handleSubmit: mockedHandleSubmit,
            formState: {
                errors: {
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
            login: jest.fn()
        })
    };
});

describe('When submits the form', () => {
    test('Should call handleSubmit', () => {
        render(<LoginForm />);

        const emailInput = screen.getByTestId('emailLoginTestId');
        const passwordInput = screen.getByTestId('passwordTestId');
        const form = screen.getByTestId('formTestId');

        userEvent.type(emailInput, 'mocked@mail.com');
        userEvent.type(passwordInput, '123456');

        fireEvent.submit(form);

        expect(mockedHandleSubmit).toHaveBeenCalled();
    });
});
