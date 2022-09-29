import styled from "styled-components";

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-width: 100px;
    min-height: 100vh;
    padding: 1rem 0;
    background-color: rgb(10,30,60);

    @media only screen and (max-width: 1300px) {
        display: none;
    }
`

export const Comands = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: #fff;

    svg { 
        width: 32px;
        height: 32px;
        border-radius: 10px;
        color: rgb(106, 96, 250);
        cursor: pointer;
        padding: 8px;
        transition: all 0.5s ease-in-out;
    }

    svg:hover { 
        color: mediumspringgreen;
        box-shadow: 1px 1px 30px mediumspringgreen;
    }
`

export const Logout = styled.div`
    svg {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        color: crimson;
        cursor: pointer;
        padding: 8px;
        transition: all 0.5s ease-in-out;
    }

    svg:hover { 
        box-shadow: 1px 1px 30px crimson;
    }
`