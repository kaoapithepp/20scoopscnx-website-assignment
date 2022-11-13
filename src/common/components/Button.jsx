import styled from "styled-components";

export const Button = styled.button`
    background-color: ${props => props.disabled ? "#DE5858" : "#D62E2E"};
    color: white;
    padding: 14px 0px;
    border-radius: 36px;
    font-size: medium;
    text-align: center;
    cursor: ${props => props.disabled ? "no-drop": "pointer"};
    width: 100%;
    font-family: var(--brand-font);
    font-weight: 500;
    border: none;
    transition: .3s;

    :hover {
        background-color: var(--hover);
    }
`;