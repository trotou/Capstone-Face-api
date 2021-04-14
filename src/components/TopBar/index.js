import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, MenuItem, Button, Typography } from '@material-ui/core/';

import { ButtonContainer } from './styles';
import { TopBarStyles } from '../../Helpers/makeStyles';
import Logo from '../../Helpers/Assets/logo.svg';

import { useServices } from '../../providers/Services';
import { useUserAuth } from '../../providers/UserAuth';

// -------------------------------------------

const TopBar = () => {
    const { getUser } = useServices();
    const { auth, setAuth } = useUserAuth();

    const [userName, setUserName] = useState('');
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')) || '');

    const history = useHistory();
    const classes = TopBarStyles();

    const handleUserData = async () => {
        const user = await getUser();
        if (!user) return;
        setUserName(user.name);
        setToken(JSON.parse(localStorage.getItem('token')) || '');
    };

    useEffect(() => {
        handleUserData();
    }, []);

    useEffect(() => {
        handleUserData();
    }, [auth]);

    const handleLogout = () => {
        localStorage.clear();
        setAuth(!auth);
    };

    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar className={classes.toolbar}>
                <MenuItem onClick={() => history.push('/')}>
                    <div className={classes.logo}>
                        <img src={Logo} alt="Logo" />
                    </div>
                </MenuItem>

                {!token && (
                    <ButtonContainer>
                        <MenuItem onClick={() => history.push('/login')}>
                            <Button className={classes.menuButton}>Login</Button>
                        </MenuItem>
                        <MenuItem onClick={() => history.push('/register')}>
                            <Button className={classes.menuButton}>Register</Button>
                        </MenuItem>
                    </ButtonContainer>
                )}
                {token && (
                    <ButtonContainer>
                        <MenuItem>
                            <Typography>{userName}</Typography>
                        </MenuItem>
                        <MenuItem className={classes.Buttons}>
                            <Button className={classes.menuButton} onClick={() => handleLogout()}>
                                Logout
                            </Button>
                        </MenuItem>
                    </ButtonContainer>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
