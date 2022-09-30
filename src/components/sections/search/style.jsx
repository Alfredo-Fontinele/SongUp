import styled from "styled-components";

export const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    gap: 30px;
`

export const Camp__Search = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: inherit;
    flex: 2;

     svg {
        left: 1.5rem;
        position: absolute;
        cursor: pointer;
    }

    input {
        padding: 0 1.5rem 0 3.5rem;
        height: inherit;
        width: 100%;
        max-width: 800px;
        border-radius: 20px;
    }

    input:focus {
        border: 1px solid var(--primary);
        box-shadow: 1px 1px 30px var(--primary);
    }
`

export const Profile = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: inherit;
    gap: 15px;

    svg:first-child {
        color: slateblue;
    }

    svg {
        color: mediumspringgreen;
        cursor: pointer;
    }

    img {
        border-radius: 10px;
        object-fit: cover;
        width: 30px;
        height: 30px;
    }

    span {
        font-size: 11px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #fff;
    }

    .btn__playlist {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;    
        font-size: 30px;
        cursor: pointer;
        color: mediumslateblue;
    }

    @media only screen and (max-width: 1300px) {
        display: none;
    }
`

export const Menu__Mobile = styled.div`
    display: none;
    justify-content: flex-end;

    svg {
        font-size: 35px;
        color: mediumslateblue;
    }

    @media only screen and (max-width: 1300px) {
        display: flex;
    }
`
