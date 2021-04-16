import styled from 'styled-components';

export const Btn = styled.button`
    width: 80%;
    height: 3.2rem;
    background: #c4c4c4;
    text-align: center;
    border-radius: 3px;
    border: 0px;
    color: #000;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.3);
    font-size: 1rem;
    margin-top: 30px;
    margin-bottom: 30px;
    cursor: pointer;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 300px;
    height: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    border-radius: 30px;

    margin: 5% 0%;
    background-color: #1b1b1b;
    color: #e5e4e4;

    .div_svg img {
        width: 5rem;
        height: 5rem;
        margin-top: 30px;

        &:hover {
            cursor: pointer;
            color: #fff;
        }
    }

    .btn__login {
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
