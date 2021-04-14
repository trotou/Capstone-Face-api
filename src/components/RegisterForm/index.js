import { useHistory, Link, Redirect } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Container, Btn, Input } from './styles';
import { useServices } from '../../providers/Services';
import { userRegisterSchema } from '../../Helpers/Constants/schemas';
import { DefaultButtonAnimation } from '../AnimationComponents/';
import Logo from '../../Helpers/Assets/logo.svg';

// -------------------------------------------
const RegisterForm = () => {
    const history = useHistory();
    const { registerForm, auth } = useServices();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(userRegisterSchema)
    });

    const handleForm = (data) => {
        registerForm(data);
        history.push('/login');
    };

    const goToHome = () => {
        history.push('/');
    };

    return !auth ? (
        <Container>
            <div className="div_svg">
                <DefaultButtonAnimation>
                    <Link to="/">
                        <img src={Logo} alt="Logo" onClick={goToHome} />
                    </Link>
                </DefaultButtonAnimation>
            </div>

            <h1>Register</h1>

            <form onSubmit={handleSubmit(handleForm)} data-testid="formRegisterTestId">
                <Input
                    data-testid="emailTestId"
                    name="email"
                    type="email"
                    label="Email"
                    margin="normal"
                    variant="filled"
                    inputProps={register('email')}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <Input
                    data-testid="passwordRegisterTestId"
                    name="password"
                    label="Senha"
                    type="password"
                    margin="normal"
                    variant="filled"
                    inputProps={register('password')}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
                <Input
                    data-testid="userNameRegisterTestId"
                    name="name"
                    label="Nome"
                    type="text"
                    margin="normal"
                    variant="filled"
                    inputProps={register('name')}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />
                <Btn type="submit">Register</Btn>
            </form>
            <div>
                <p>
                    Already have an account?
                    <br />
                    <Link className="link-form" to="/login">
                        Login
                    </Link>
                </p>
            </div>
        </Container>
    ) : (
        <Redirect to="/" />
    );
};

export default RegisterForm;
