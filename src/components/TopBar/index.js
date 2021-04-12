import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ButtonConteiner } from './styles';
import { makeStyles, AppBar, Toolbar, MenuItem, Button, Typography } from '@material-ui/core/';

const useStyles = makeStyles({
    header: {
        width: '100%',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        borderWidth: '0px, 0px, 5px 0px',
        borderColor: '#3d3d3d',
        boxShadow: '0px 0px 30px 0px rgba(61, 61, 61, 1)',

        backgroundColor: '#202020',
        color: '#fff'
    },

    tollbar: {
        width: '90%',
        margin: 'auto 0',

        display: 'flex',
        justifyContent: 'space-between'
    },

    menuButton: {
        marginLeft: '5px',
        background: '#c4c4c4',
        color: '#000',
        '&:hover': {
            background: '#c4c4c4'
        }
    }
});

const TopBar = () => {
    const [fake, setFake] = useState(false);

    const history = useHistory();

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar className={classes.tollbar}>
                <MenuItem onClick={() => history.push('/')}>
                    <svg
                        width="6rem"
                        height="4rem"
                        viewBox="0 0 35 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 1L15 2M4 1L1 4.5M4 1L6.5 5.5M15 2H21.5M15 2L18 4M21.5 2L31.5 1M21.5 2L18 4M31.5 1L34 4M31.5 1L28 5.5M34 4L33 11M34 4L28 5.5M33 11L30 21.5M33 11L28 5.5M33 11L26.5 20M30 21.5L25.5 28L18 31.5L8.5 27L4 20M30 21.5L26.5 20M4 20L2.5 12M4 20L8.5 19.5M2.5 12L1 4.5M2.5 12L6.5 5.5M2.5 12L8.5 19.5M1 4.5L6.5 5.5M18 4L20.5 16M18 4L15.5 16M18 4L15.5 6L13.5 14.5M18 4L20 6L23 14.5M20.5 16L18 17.5M20.5 16L23 14.5M18 17.5L15.5 16M18 17.5V20M15.5 16L13.5 14.5M18 20.5L20.5 20L25 20.5M18 20.5L16 20L11 20.5M18 20.5V20M25 20.5L21.5 24L18 25M25 20.5L26.5 20M18 25L14 24L11 20.5M18 25V22.5V20M11 20.5L8.5 19.5M6.5 5.5L8.5 19.5M28 5.5L26.5 20M26.5 20L23 14.5M8.5 19.5L13.5 14.5"
                            stroke="#C2C2C2"
                        />
                    </svg>
                </MenuItem>

                {!fake && (
                    <ButtonConteiner>
                        <MenuItem onClick={() => history.push('/login')}>
                            <Button className={classes.menuButton}>Login</Button>
                        </MenuItem>
                        <MenuItem onClick={() => history.push('/register')}>
                            <Button className={classes.menuButton}>Register</Button>
                        </MenuItem>
                    </ButtonConteiner>
                )}
                {fake && (
                    <ButtonConteiner>
                        <MenuItem>
                            <Typography>Usuario</Typography>
                        </MenuItem>
                        <MenuItem className={classes.Buttons}>
                            <Button className={classes.menuButton}>Logout</Button>
                        </MenuItem>
                    </ButtonConteiner>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
