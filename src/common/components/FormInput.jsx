import { useState } from "react";
import styled from "styled-components";

const FormInput = ({
    callbackVal,
    label,
    placeholder,
    type,
    maxChar
}) => {

    const [value, setValue] = useState('');

    function onFormChange(e) {
        callbackVal(e.target.value);
        setValue(e.target.value);
    }

    function maxLengthCheck(e){
        if(e.target.value.length > e.target.maxLength) {
            e.target.value = e.target.value.slice(0, e.target.maxLength);
        }
    }
    
    return (
        <FormWrapper>
            <p>{label}</p>
            <input
                type={type}
                value={value}
                onChange={e => onFormChange(e)}
                placeholder={placeholder}
                maxLength={maxChar}
                onInput={maxChar ? maxLengthCheck : null}
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
