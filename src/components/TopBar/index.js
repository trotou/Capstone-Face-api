import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, MenuItem, Button, Typography } from '@material-ui/core/';
import { useServices } from '../../providers/Services';
import { ButtonContainer, MenuBurger } from './styles';
import { slide as Menu } from 'react-burger-menu';
import { TopBarStyles } from '../../Helpers/makeStyles';
import Logo from '../../Helpers/Assets/logo.svg';
import { DefaultButtonAnimation } from '../AnimationComponents/';

// -------------------------------------------

const TopBar = () => {
    const history = useHistory();
    const classes = TopBarStyles();
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
        <div>
            <AppBar position="static" className={classes.header}>
                <Toolbar className={classes.toolbar}>
                    <DefaultButtonAnimation>
                        <MenuItem onClick={() => history.push('/')}>
                            <div className={classes.logo}>
                                <img src={Logo} alt="Logo" />
                            </div>
                        </MenuItem>
                    </DefaultButtonAnimation>

                    <MenuItem className={classes.itemMenu}>
                        <Menu right styles={MenuBurger}>
                            {!auth ? (
                                <>
                                    <ButtonContainer>
                                        <DefaultButtonAnimation>
                                            <Button
                                                onClick={() => history.push('/login')}
                                                className={classes.menuButton}
                                            >
                                                Login
                                            </Button>
                                        </DefaultButtonAnimation>
                                    </ButtonContainer>

                                    <ButtonContainer>
                                        <DefaultButtonAnimation>
                                            <Button
                                                onClick={() => history.push('/register')}
                                                className={classes.menuButton}
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
                                                className={classes.menuButton}
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
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default TopBar;
