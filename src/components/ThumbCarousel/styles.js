import styled from 'styled-components';

export const CarouselDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 310px;
    width: 224px;
    color: #fff;
    margin: 15px;
    font-size: 1em;
    border-radius: 15px;
    overflow-wrap: break-word;
    :hover {
        background-color: #683bb7;
    }
    @media (max-width: 400px) {
        width: 184px;
        height: 340px;
    }
`;

export const ButtonsDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 400px) {
        height: 80px;
        flex-direction: column;
    }
`;
