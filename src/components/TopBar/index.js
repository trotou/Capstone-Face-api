import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, MenuItem, Button, Typography } from '@material-ui/core/';
import { useServices } from '../../providers/Services';
import { ButtonContainer, MenuBurger, Container } from './styles';
import { slide as Menu } from 'react-burger-menu';
import { TopBarStyles, TopBarMobileStyles } from '../../Helpers/makeStyles';
import Logo from '../../Helpers/Assets/logo.svg';
import { DefaultButtonAnimation } from '../AnimationComponents/';

// -------------------------------------------

const TopBar = () => {
    const history = useHistory();
    const classes = TopBarStyles();
    const classesMobile = TopBarMobileStyles();
    const { getUser, auth, logout } = useServices();
    const [userName, setUserName] = useState('');

    useEffect(() => {
        handleUserData();
        // eslint-disable-next-line
    }, [auth]);

    const handleUserData = async () => {
        if (auth) {
            const user = await getUser();
            setUserName(user.name);
        }
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <Container>
            <AppBar position="static" className={classesMobile.header}>
                <Toolbar className={classesMobile.toolbar}>
                    <DefaultButtonAnimation>
                        <MenuItem onClick={() => history.push('/')}>
                            <div className={classes.logo}>
                                <img src={Logo} alt="Logo" />
                            </div>
                        </MenuItem>
                    </DefaultButtonAnimation>

                    <div className="mobile">
                        <MenuItem className={classesMobile.itemMenu}>
                            <Menu right styles={MenuBurger}>
                                {!auth ? (
                                    <>
                                        <ButtonContainer>
                                            <DefaultButtonAnimation>
                                                <Button
                                                    onClick={() => history.push('/login')}
                                                    className={classesMobile.menuButton}
                                                >
                                                    Login
                                                </Button>
                                            </DefaultButtonAnimation>
                                        </ButtonContainer>

                                        <ButtonContainer>
                                            <DefaultButtonAnimation>
                                                <Button
                                                    onClick={() => history.push('/register')}
                                                    className={classesMobile.menuButton}
                                                >
                                                    Register
                                                </Button>
                                            </DefaultButtonAnimation>
                                        </ButtonContainer>
                                    </>
                                ) : (
                                    <>
                                        <ButtonContainer>
                                            <Typography>{userName}</Typography>
                                        </ButtonContainer>

                                        <ButtonContainer>
                                            <DefaultButtonAnimation>
                                                <Button
                                                    className={classesMobile.menuButton}
                                                    onClick={handleLogout}
                                                >
                                                    Logout
                                                </Button>
                                            </DefaultButtonAnimation>
                                        </ButtonContainer>
                                    </>
                                )}
                            </Menu>
                        </MenuItem>
                    </div>

                    {!auth ? (
                        <div className="desktop">
                            <ButtonContainer>
                                <DefaultButtonAnimation>
                                    <MenuItem onClick={() => history.push('/login')}>
                                        <Button className={classes.menuButton}>Login</Button>
                                    </MenuItem>
                                </DefaultButtonAnimation>

                                <DefaultButtonAnimation>
                                    <MenuItem onClick={() => history.push('/register')}>
                                        <Button className={classes.menuButton}>Register</Button>
                                    </MenuItem>
                                </DefaultButtonAnimation>
                            </ButtonContainer>
                        </div>
                    ) : (
                        <div className="desktop">
                            <ButtonContainer>
                                <MenuItem>
                                    <Typography>{userName}</Typography>
                                </MenuItem>
                                <MenuItem className={classes.Buttons}>
                                    <Button className={classes.menuButton} onClick={handleLogout}>
                                        Logout
                                    </Button>
                                </MenuItem>
                            </ButtonContainer>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Container>
    );
};

export default TopBar;
