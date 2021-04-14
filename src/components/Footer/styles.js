import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;

    padding: 3% 0%;

    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;

    background: #181818;
    color: #fff;

    .container-list {
        width: 80%;
        height: 5%;

        margin: 0 auto;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-items: center;
        align-items: center;
    }

    .container-description {
        width: 45%;
        height: 5%;

        margin: 2% 2%;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .container-description__in {
        width: 75%;
        text-align: left;
    }

    h2 {
        font-size: 2rem;
    }

    @media (max-width: 650px) {
        .container-description {
            width: 90%;
            height: 5%;

            margin: 5% 2%;

            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
    }
`;

export const YellowCircle = styled.div`
    width: 4rem;
    height: 4rem;

    margin: 0% 3%;

    border-radius: 75%;

    background: #ffb432;
`;
