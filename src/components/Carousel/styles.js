import styled from 'styled-components';

export const CarouselDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 250px;
    width: 100%;
    background-color: #683bb7;
    color: #fff;
    margin: 15px;
    font-size: 1em;
`;

export const CarouselWrapper = styled.div`
    width: 80%;
    height: auto;

    margin: 0 auto;
    margin-bottom: 3%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: sans-serif;

    .button-Change {
        width: auto;
        height: 1.2rem;

        display: flex;
        justify-content: center;
        align-items: center;

        //margin: 3% 0%;

        padding: 2%;

        border: none;
        border-radius: 10px;

        text-align: center;

        background: #373737;
        color: #fff;

        cursor: pointer;
    }
`;
