import { Container, Btn, Input } from './styles';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useServices } from '../../providers/Services';

const LoginForm = () => {
    const { login } = useServices();

    const requiredFild = 'Campo obrigatório';

    const schema = yup.object().shape({
        email: yup.string().email('Email inválido').required(requiredFild),

        password: yup
            .string()
            .min(8, 'Mínimo de 8 dígitos')
            .matches(
                /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                'Senha Incorreta'
            )
            .required(requiredFild)
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const handleForm = (data) => {
        console.log(data);
        login(data);
    };

    return (
        <Container>
            <div className="div_svg">
                <svg viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4 1L15 2M4 1L1 4.5M4 1L6.5 5.5M15 2H21.5M15 2L18 4M21.5 2L31.5 1M21.5 2L18 4M31.5 1L34 4M31.5 1L28 5.5M34 4L33 11M34 4L28 5.5M33 11L30 21.5M33 11L28 5.5M33 11L26.5 20M30 21.5L25.5 28L18 31.5L8.5 27L4 20M30 21.5L26.5 20M4 20L2.5 12M4 20L8.5 19.5M2.5 12L1 4.5M2.5 12L6.5 5.5M2.5 12L8.5 19.5M1 4.5L6.5 5.5M18 4L20.5 16M18 4L15.5 16M18 4L15.5 6L13.5 14.5M18 4L20 6L23 14.5M20.5 16L18 17.5M20.5 16L23 14.5M18 17.5L15.5 16M18 17.5V20M15.5 16L13.5 14.5M18 20.5L20.5 20L25 20.5M18 20.5L16 20L11 20.5M18 20.5V20M25 20.5L21.5 24L18 25M25 20.5L26.5 20M18 25L14 24L11 20.5M18 25V22.5V20M11 20.5L8.5 19.5M6.5 5.5L8.5 19.5M28 5.5L26.5 20M26.5 20L23 14.5M8.5 19.5L13.5 14.5"
                        stroke="#C2C2C2"
                    />
                </svg>
            </div>

            <h1>Login</h1>

            <form onSubmit={handleSubmit(handleForm)}>
                <Input
                    name="email"
                    type="email"
                    inputProps={register('email')}
                    label="Email"
                    margin="normal"
                    variant="filled"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />

                <Input
                    name="password"
                    type="password"
                    inputProps={register('password')}
                    label="Senha"
                    margin="normal"
                    variant="filled"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />

                <Btn type="submit">Login</Btn>

                <div>
                    <p>Don’t have an account yet?</p>
                    <p>Register!</p>
                </div>
            </form>
        </Container>
    );
};

export default LoginForm;
