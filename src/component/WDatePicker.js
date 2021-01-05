import React, { useEffect } from 'react';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const WDatePicker = props => {
    const [selectedDate, handleDateChange] = React.useState(null);
    const [label, setLabel] = React.useState("");
    const [placeHolder, setPlaceHolder] = React.useState("");
    const dateFormat = "dd/MM/yyyy";

    useEffect(() => {
        if (props.value) {
            const dateUtils = new DateFnsUtils();
            const value = dateUtils.parse(props.value, dateFormat)
            handleDateChange(value);
        }

        if (props.label) {
            setLabel(props.label);
        }

        if (props.placeHolder) {
            setPlaceHolder(props.placeHolder);
        }
    }, [])

    useEffect(() => {
        props.onChange(selectedDate);
    }, [selectedDate])

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                autoOk
                variant="inline"
                margin="normal"
                value={selectedDate}
                placeholder={placeHolder}
                label={label}
                format={dateFormat}
                onChange={date => handleDateChange(date)}
            />
        </MuiPickersUtilsProvider>
    )

}

export default WDatePicker