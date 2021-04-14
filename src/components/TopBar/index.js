import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, MenuItem, Button, Typography } from '@material-ui/core/';
import { useServices } from '../../providers/Services';
import { ButtonContainer } from './styles';
import { TopBarStyles } from '../../Helpers/makeStyles';
import Logo from '../../Helpers/Assets/logo.svg';

// -------------------------------------------

const TopBar = () => {
    const history = useHistory();
    const classes = TopBarStyles();
    const { getUser, auth, logout } = useServices();
    const [userName, setUserName] = useState('');

    useEffect(() => {
        handleUserData();
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
        <AppBar position="static" className={classes.header}>
            <Toolbar className={classes.toolbar}>
                <MenuItem>
                    <div className={classes.logo}>
                        <img src={Logo} alt="Logo" />
                    </div>
                </MenuItem>
                {!auth ? (
                    <ButtonContainer>
                        <MenuItem onClick={() => history.push('/login')}>
                            <Button className={classes.menuButton}>Login</Button>
                        </MenuItem>
                        <MenuItem onClick={() => history.push('/register')}>
                            <Button className={classes.menuButton}>Register</Button>
                        </MenuItem>
                    </ButtonContainer>
                ) : (
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
                )}
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
