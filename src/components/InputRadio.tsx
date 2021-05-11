import React from 'react'
import { createStyles, FormControl, FormControlLabel, makeStyles, Paper, Radio, RadioGroup, Theme, Typography } from '@material-ui/core'
import { IAttribute, IInputRadioProps } from '../models/Products';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(1)
        }
    }),
);
const InputRadio = (props: IInputRadioProps) => {
    const classes = useStyles();
    const { label, data, handleInputChange, value } = props;
    const radioButton = () => data.map((option: IAttribute) => <FormControlLabel key={option.id} labelPlacement="bottom" value={option.value} control={<Radio />} label={option.value} />)

    return (
        <Paper elevation={3} className={classes.root}>
            <FormControl component="fieldset">
                <Typography id='radio-label' variant="overline" component="span">{label}</Typography>
                <RadioGroup row aria-label={label} name={label} value={value} onChange={(e) => handleInputChange(label, e.target.value)}>
                    {radioButton()}
                </RadioGroup>
            </FormControl>
        </Paper>
    )
}

export default InputRadio;