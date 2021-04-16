import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory, Link, Redirect } from 'react-router-dom';
import { Snackbar, IconButton } from '@material-ui/core';
import { Container, Btn } from './styles';
import CloseIcon from '@material-ui/icons/Close';
import { useServices } from '../../providers/Services';
import { userLoginSchema } from '../../Helpers/Constants/schemas';
import { TextField } from '@material-ui/core/';
import { InputStyles } from '../../Helpers/makeStyles';
import { DefaultButtonAnimation } from '../AnimationComponents/';
import Logo from '../../Helpers/Assets/logo.svg';

// ------------------------------------------------
const LoginForm = () => {
    const [errorLogin, setErrorLogin] = React.useState(false);
    const history = useHistory();
    const classes = InputStyles();
    const { login, auth } = useServices();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(userLoginSchema)
    });

    const handleForm = async (data) => {
        const isLogged = await login(data);
        console.log(isLogged);

        // criar feedback visual de sucesso ou erro
        isLogged ? history.push('/') : setErrorLogin(true);
    };

    const goToHome = () => {
        history.push('/');
    };

    const handleClose = () => {
        setErrorLogin(false);
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

            <h1>Login</h1>

            <form onSubmit={handleSubmit(handleForm)} data-testid="formTestId">
                <TextField
                    className={classes.input}
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

                <TextField
                    className={classes.input}
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
            <div>
                <p>
                    Don’t have an account yet?
                    <br />
                    <Link className="link-form" to="/register">
                        Register
                    </Link>
                </p>
            </div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                open={errorLogin}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Login failed"
                action={
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={handleClose}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                }
            />
        </Container>
    ) : (
        <Redirect to="/" />
    );
};

export default LoginForm;
