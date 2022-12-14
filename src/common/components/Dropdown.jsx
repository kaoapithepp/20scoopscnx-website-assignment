import { useState } from "react";
import styled from "styled-components";

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Dropdown = ({
    callbackVal,
    label,
    placeholder,
    data
}) => {

    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState(placeholder);

    function handleChildClick(element) {
        callbackVal(element);
        setValue(element);
    }

    const childList = data.map((element, key) => {
        return (
            <p key={key} onClick={e => handleChildClick(element)}>{element}</p>
        );
    });

    return (
        <>
            <FormWrapper
                focusing={isActive}
                onClick={e => setIsActive(!isActive)}
            >
                <p>{label}</p>
                <div className="dropdown">
                    { isActive? 
                        <>
                            {value} <KeyboardArrowUpIcon />
                        </>
                        : 
                        <>
                            {value} <KeyboardArrowDownIcon />
                        </>
                    }
                </div>
                {isActive && 
                    <ChildList>
                        {childList}
                    </ChildList>
                }
            </FormWrapper>
        </>
        
    );
}


const FormWrapper = styled.div`
    margin: 8px 0px;
    
    p {
        margin: 4px 0px;
        font-size: 16px;
        @media screen and (max-width: 768px) {
            font-size: 12px;
        }
    }
    .dropdown {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        position: relative;
        padding: 8px;
        border: 1px solid var(--form-grey);
        border-radius: 32px;
        width: 100%;
        outline: none;
        cursor: pointer;
        color: var(--black);
        font-size: 14px;
        font-family: var(--brand-font);
        ::placeholder {
            color: var(--form-grey);
            font-weight: 400;
        }
        // :focus
        ${({ focusing }) => focusing && `
            border-color: var(--button-color);
        `}
        @media screen and (max-width: 768px) {
            font-size: 12px;
        }
    }
`;

const ChildList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 14px;
    position: absolute;
    z-index: 99;
    background-color: var(--white);
    width: 30%;
    max-height: 20%;
    overflow: hidden;
    /* overflow-y: scroll; */
    border-radius: 10px;
    box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    @media screen and (max-width: 768px) {
        font-size: 12px;
        max-height: 10%;
        width: 50%;
    }

    p {
        color: var(--black);
    }
`;

export default Dropdown;