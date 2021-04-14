import styled from 'styled-components';

export const Container = styled.div`
    @media (max-width: 650px) {
        height: 75vh;
        margin: 0 auto;
        margin-bottom: 10%;
    }

    width: 80%;
    height: 60vh;

    margin: 0 auto;
    margin-bottom: 5%;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: #fff;

    .div-button {
        width: 80%;
        height: 5rem;

        margin: 5% 0%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .button-Change {
        width: 10rem;
        height: 2rem;

        display: flex;
        justify-content: center;
        align-items: center;

        margin: 3% 0%;

        padding: 2%;

        border: none;
        border-radius: 10px;

        text-align: center;

        background: #373737;
        color: #fff;

        cursor: pointer;
    }

    @media (max-width: 720px) {
        video {
            width: 300px;
            height: 220px;
        }
    }

    @media (min-width: 721px) {
        video {
            width: 700px;
            height: 450px;
        }
    }
`;

export const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 1%;

    border-radius: 15px;

    background: #202020;
`;

export const ImageContainer = styled.div`
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
    padding: 1%;

    border-radius: 15px;

    background: #202020;
`;

export const Button = styled.button`
    width: 10rem;
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 3% 0%;

    padding: 2%;

    border: none;
    border-radius: 10px;

    text-align: center;

    background: #373737;
    color: #fff;

    cursor: pointer;
`;

export const SelectFile = styled.input`
    @media (max-width: 540px) {
        width: 300px;
    }

    margin: 0 auto;

    background-color: #3d3d3d;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    margin: 10px;
    padding: 6px 20px;
`;
