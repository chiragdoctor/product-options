import React from 'react'
import { createStyles, FormControl, InputLabel, makeStyles, Paper, Select, Theme } from '@material-ui/core'
import { IAttribute, IInputRadioProps } from '../models/Products';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(1)
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 400,
        },
        inputLabel: {
            fontSize: theme.spacing(2),
            textTransform: 'uppercase'
        }
    }),
);
const InputSelect = (props: IInputRadioProps) => {
    const classes = useStyles();
    const { label, data, handleInputChange, value } = props;
    const options = () => data.map((option: IAttribute) => <option key={option.id} value={option.value.toString()}>{option.value}</option>)

    return (
        <Paper elevation={3} className={classes.root}>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor={`${label}-native-simple`} color="secondary" className={classes.inputLabel}>{label}</InputLabel>
                <Select
                    native
                    fullWidth
                    value={value}
                    onChange={(e) => handleInputChange(label, e.target.value)}
                    inputProps={{
                        name: `${label}`,
                        id: `{label}-native-simple`,
                    }}
                >
                    {options()}
                </Select>
            </FormControl>
        </Paper>
    )
}

export default InputSelect;