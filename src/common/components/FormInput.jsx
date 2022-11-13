import { useState } from "react";
import styled from "styled-components";

const FormInput = ({
    callbackVal,
    label,
    placeholder,
    type 
}) => {

    const [value, setValue] = useState('');

    function onFormChange(e) {
        callbackVal(e.target.value);
        setValue(e.target.value);
    }
    
    return (
        <FormWrapper>
            <p>{label}</p>
            <input
                type={type}
                value={value}
                onChange={e => onFormChange(e)}
                placeholder={placeholder}
            />
        </FormWrapper>
    );
}

const FormWrapper = styled.div`
    margin: 12px 0px;
    
    p {
        margin: 4px 0px;
        font-size: 16px;
        @media screen and (max-width: 768px) {
            font-size: 12px;
        }
    }
    input {
        box-sizing: border-box;
        padding: 12px;
        border: 1px solid var(--form-grey);
        border-radius: 36px;
        width: 100%;
        outline: none;
        font-size: 14px;
        font-family: "Poppins", sans-serif;
        ::placeholder {
            color: var(--form-grey);
            font-weight: 400;
        }
        :focus {
            border-color: var(--button-color);
        }
        @media screen and (max-width: 768px) {
            font-size: 12px;
        }
    }
`;

export default FormInput;
