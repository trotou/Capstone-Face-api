import styled from 'styled-components';

import { TextField } from '@material-ui/core';

export const Input = styled(TextField)`
    width: 80%;

    color: #fff;
    box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.3);

    & .MuiFormLabel-root,
    .MuiInputBase-root {
        background: #fff;
        color: #000;
    }

    & .MuiFormLabel-root,
    .MuiInputBase-root:hover {
        background: #fff;
    }

    & .Mui-focused {
        background: none;
        color: #000;
    }
`;

export const Btn = styled.button`
    width: 80%;
    background: #c4c4c4;
    text-align: center;
    border-radius: 3px;
    border: 0px;
    color: #000;
    height: 35px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.3);
    font-size: 1rem;
    margin-top: 30px;
    margin-bottom: 30px;
    cursor: pointer;
`;

export const Container = styled.div`
    width: 15rem;
    height: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    border-radius: 30px;

    margin: 0 auto;
    background-color: #1b1b1b;
    color: #e5e4e4;

    .div_svg img {
        width: 7rem;
        height: 5rem;
        margin-top: 30px;

        &:hover {
            cursor: pointer;
            color: #fff;
        }
    }

    .btn__register {
        background: none;
        border: none;
        margin-bottom: 10px;
        font-size: 1.2rem;
        color: #e5e4e4;
    }

    .link-form {
        color: #e5e4e4;

        text-decoration: none;

        cursor: pointer;
    }
`;
