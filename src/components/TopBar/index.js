import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, MenuItem, Button, Typography } from '@material-ui/core/';

import { ButtonContainer } from './styles';
import { TopBarStyles } from '../../Helpers/makeStyles';
import Logo from '../../Helpers/Assets/logo.svg';

import { useUserAuth } from '../../providers/UserAuth';

// -------------------------------------------

const TopBar = () => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')) || '');

    const { auth, setAuth } = useUserAuth();

    const history = useHistory();
    const classes = TopBarStyles();

    useEffect(() => {
        setToken(JSON.parse(localStorage.getItem('token')) || '');
        console.log('TopBar', auth);
    }, []);

    useEffect(() => {
        setToken(JSON.parse(localStorage.getItem('token')) || '');
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
                            <Typography>Usuario</Typography>
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
