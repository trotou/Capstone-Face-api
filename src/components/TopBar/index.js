import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, MenuItem, Button, Typography } from '@material-ui/core/';

import { ButtonContainer } from './styles';
import { TopBarStyles } from '../../Helpers/makeStyles';
import Logo from '../../Helpers/Assets/logo.svg';

// -------------------------------------------

const TopBar = () => {
    const history = useHistory();
    const classes = TopBarStyles();
    const [fake, setFake] = useState(false);

    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar className={classes.toolbar}>
                <MenuItem onClick={() => history.push('/')}>
                    <div className={classes.logo}>
                        <img src={Logo} alt="Logo" />
                    </div>
                </MenuItem>

                {!fake && (
                    <ButtonContainer>
                        <MenuItem onClick={() => history.push('/login')}>
                            <Button className={classes.menuButton}>Login</Button>
                        </MenuItem>
                        <MenuItem onClick={() => history.push('/register')}>
                            <Button className={classes.menuButton}>Register</Button>
                        </MenuItem>
                    </ButtonContainer>
                )}
                {fake && (
                    <ButtonContainer>
                        <MenuItem>
                            <Typography>Usuario</Typography>
                        </MenuItem>
                        <MenuItem className={classes.Buttons}>
                            <Button className={classes.menuButton}>Logout</Button>
                        </MenuItem>
                    </ButtonContainer>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
