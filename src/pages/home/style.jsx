import styled from "styled-components";

export const Home = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://wallpaperaccess.com/full/758196.jpg");
    background-size: cover;
`

export const HomeDescription = styled.div`
    background-color: rgba(20,30,40, 0.7);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px 50px;
`

export const HomeTitle = styled.h1`
    color: var(--primary);
`

export const BtnHome = styled.button`
    padding: 10px 20px;
    font-weight: bold;
    color: #fff;
    transition: all 0.5s;
    cursor: pointer;
    border-radius: 8px;
    background-color: var(--primary);

    &:hover {
        transform: scale(1.01);
        box-shadow: 1px 1px 30px var(--primary);
    }
`
