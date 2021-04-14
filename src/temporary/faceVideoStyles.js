import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    height: auto;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: #fff;

    .button-Change {
        width: auto;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
