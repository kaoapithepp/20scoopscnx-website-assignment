import { useState } from "react";

import styled from "styled-components";

// MUI icons
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';

const PasswordInput = ({
    callbackVal,
    label,
    placeholder,
    type 
}) => {

    const [value, setValue] = useState('');
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);

    function onFormChange(e) {
        callbackVal(e.target.value);
        setValue(e.target.value);
    }

    function onToggleVisiblePassword() {
        setIsVisiblePassword(!isVisiblePassword);
    }
    
    return (
        <FormWrapper>
            <p>{label}</p>
            <div className="toggle-pw-icon">
                <input
                    type={isVisiblePassword ? "text" : "password"}
                    value={value}
                    onChange={e => onFormChange(e)}
                    placeholder={placeholder}
                />
                <div className="icon" onClick={onToggleVisiblePassword}>
                    { isVisiblePassword ? 
                        <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />
                    }
                </div>
                
            </div>
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

    .toggle-pw-icon {
        display: flex;
        align-items: center;

        .icon {
            display: flex;
            align-items: center;
            
            margin-left: 10px;
            cursor: pointer;
            opacity: .6;
        }
    }
`;

export default PasswordInput;
