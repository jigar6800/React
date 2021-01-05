import React, { useEffect } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const WCheckbox = props => {
    const [checked, setChecked] = React.useState(false);
    const [label, setLabel] = React.useState('');

    const handleChange = (event) => {
        setChecked(event.target.checked);
        props.onChange(event.target.checked);
    };

    useEffect(() => {
        if (props.label) {
            setLabel(props.label)
        }

        if (props.checked !== undefined) {
            setChecked(Boolean(props.checked));
        }
    }, [])

    useEffect(() => {
        props.onChange(checked);
    }, [checked])

    return (
        <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
            label={label}
        />
    )
}

export default WCheckbox