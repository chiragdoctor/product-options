import React, { useState } from 'react'
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core'
import { IAttribute } from '../models/Products';

export interface IInputRadioProps {
    label: string;
    data: IAttribute[];
    defaultValue: string;
}
const InputRadio = (props: IInputRadioProps) => {
    const { label, data, defaultValue } = props;
    const [value, setValue] = useState(defaultValue);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    const radioButton = () => data.map((option: IAttribute) => <FormControlLabel key={option.id} labelPlacement="bottom" value={option.value} control={<Radio />} label={option.value} />)

    return (
        <FormControl component="fieldset">
            <Typography id='radio-label' variant="overline" component="span">{label}</Typography>
            <RadioGroup row aria-label={label} name={label} value={value} onChange={handleChange}>
                {radioButton()}
            </RadioGroup>
        </FormControl>
    )
}

export default InputRadio;