import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MenuBurger = {
    bmBurgerButton: {
        width: '1rem',
        height: '1rem',
        color: '#000'
    },
    bmBurgerBars: {
        background: '#373737'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '90%'
    },
    bmMenu: {
        height: '90%',
        background: '#202020',
        boxShadow: '10px 3px 8px 5px rgba(0, 0, 0, 0.3)',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        height: '90%',
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmItem: {
        display: 'flex',
        justifyContent: 'center',
        alignIten: 'center'
    },
    bmOverlay: {
        background: 'none'
    }
};
