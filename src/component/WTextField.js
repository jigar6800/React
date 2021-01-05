import React, { useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { useDebouncedEffect } from "../common/useDebouncedEffect";

const WTextField = props => {
    const [change, setChange] = React.useState({ value: '', textLength: 0 });
    const [isMultiline, setIsMultiline] = React.useState(false);
    const [placeHolder, setPlaceHolder] = React.useState('');
    const [label, setLabel] = React.useState('');
    const [maxLength, setMaxLength] = React.useState(null);
    const { value, textLength } = change

    useEffect(() => {
        if (props.placeholder) {
            setPlaceHolder(props.placeholder);
        }

        if (props.label) {
            setLabel(props.label)
        }

        if (props.isMultiline) {
            setIsMultiline(props.isMultiline);
        }

        if (props.maxLength) {
            setMaxLength(Number(props.maxLength));
        }

        if (props.value) {
            const value = String(props.value);
            setChange({ value: value, textLength: value.length });
        }
    }, [])

    useDebouncedEffect(() => {
        if (props.onChange !== undefined && (value !== props.value)) {
            props.onChange(value);
        }
    }, 1000, [value])

    const handleChange = (event) => {
        const value = String(event.target.value);
        setChange({ value: value, textLength: value.length });
    };

    return (
        <div className="inputGroup_div">
            <TextField
                placeholder={placeHolder}
                label={label}
                className="WTextFieldMain"
                multiline={isMultiline}
                rowsMax={3}
                value={value}
                onChange={handleChange}
                inputProps={{ maxLength: maxLength }}
                helperText={maxLength && textLength + '/' + maxLength}
                variant="outlined"
            />
        </div>
    )
}

export default WTextField