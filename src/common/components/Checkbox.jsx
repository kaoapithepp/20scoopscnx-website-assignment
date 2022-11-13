import { useState } from "react";

// Styles
import styled from "styled-components";

// MUI icons
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';


const Checkbox = ({ callbackVal }) => {

    const [value, setValue] = useState(false);

    function onToggleValue() {
        callbackVal(!value);
        setValue(!value);
    }

    return (
        <CheckBoxElement onClick={onToggleValue}>
            { value ? <CheckBoxRoundedIcon /> :
                <CheckBoxOutlineBlankRoundedIcon />
            }
        </CheckBoxElement>
    );
}

const CheckBoxElement = styled.div`
    color: var(--primary-color);
    cursor: pointer;
    display: flex;
    align-items: center;
`

export default Checkbox;