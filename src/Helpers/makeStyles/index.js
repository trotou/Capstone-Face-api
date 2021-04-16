import { makeStyles } from '@material-ui/core';

// --------------------------------------------

export const InputStyles = makeStyles({
    input: {
        width: '80%',

        borderRadius: '5px 5px 0px 0px',

        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.3)',
        boxSizing: 'content-box',

        background: '#fff',
        color: '#000'
    }
});

export const TopBarStyles = makeStyles({
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

    toolbar: {
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
    },
    logo: {
        width: '3rem',
        height: '3rem',

        '&hover': {
            background: '#fff'
        }
    }
});

export const TopBarMobileStyles = makeStyles({
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

    toolbar: {
        width: '90%',
        margin: 'auto 0',

        display: 'flex',
        justifyContent: 'space-between'
    },

    menuButton: {
        margin: '0% 3%',
        background: 'none',
        color: '#fff'
    },
    logo: {
        width: '3rem',
        height: '3rem',

        '&hover': {
            background: '#fff'
        }
    }
});
