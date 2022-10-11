import styled, { keyframes } from "styled-components"

export const Welcome = styled.div`
    animation: ${({ animation }) => animation} 0.7s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 100%;
    max-width: 400px;
    height: 250px;
    border-radius: 8px;
    background-image: url("https://i.gifer.com/ETUJ.gif");
    background-size: cover;
    box-shadow: 1px 1px 30px var(--primary);

    h1 {
        font-size: 45px;
        color: var(--primary);
    }

    button {
        padding: 10px 20px;
        font-weight: bold;
        color: #fff;
        border-radius: 8px;
        background-color: var(--primary);
    }

    button:hover {
        background-color: mediumspringgreen;
        box-shadow: 1px 1px 30px mediumspringgreen;        
    }

`