import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory, Link } from 'react-router-dom';

import { Container, Btn, Input } from './styles';
import { useServices } from '../../providers/Services';
import { userLoginSchema } from '../../Helpers/Constants/schemas';
import Logo from '../../Helpers/Assets/logo.svg';

import { useUserAuth } from '../../providers/UserAuth';

// ------------------------------------------------
const LoginForm = () => {
    const { auth, setAuth } = useUserAuth();

    const history = useHistory();
    const { login } = useServices();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(userLoginSchema)
    });

    const handleForm = (data) => {
        login(data);
        setAuth(auth);
        history.push('/');
    };

    return (
        <Container>
            <div className="div_svg">
                <img src={Logo} alt="Logo" />
            </div>

            <h1>Login</h1>

            <form onSubmit={handleSubmit(handleForm)} data-testid="formTestId">
                <Input
                    data-testid="emailLoginTestId"
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
                    data-testid="passwordTestId"
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
            </form>
            <p>
                Don’t have an account yet? <Link to="/register">Register</Link>
            </p>
        </Container>
    );
};

export default LoginForm;
