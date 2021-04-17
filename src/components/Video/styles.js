import styled from 'styled-components';

export const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;

    border-radius: 15px;

    background: #202020;
`;

export const Button = styled.label`
    padding: 6px 8px;
    color: #000;
    background: #c4c4c4;
    justify-content: center;
    text-decoration: none;
    vertical-align: middle;
    align-items: center;
    user-select: none;
    border: 0;
    cursor: pointer;
    margin: 0.5rem;
    display: inline-flex;
    outline: 0;
    font-size: 0.875rem;
    min-width: 64px;
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 500;
    line-height: 1.75;
    border-radius: 4px;
    letter-spacing: 0.02857em;
`;
