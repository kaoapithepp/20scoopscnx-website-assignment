import styled from "styled-components";

export const BorderedButton = styled.button`
    background-color: var(--white);
    color: var(--button-color);
    border: 2px solid var(--button-color);
    border-radius: 36px;

    padding: 14px 0px;
    width: 100%;
    cursor: pointer;
    
    text-align: center;
    font-size: medium;
    font-family: var(--brand-font);
    font-weight: 500;

    transition: .3s;

    :hover {
        transform: scale(103%);
    }
`;