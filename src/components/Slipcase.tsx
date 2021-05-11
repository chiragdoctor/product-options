import React from 'react'
import { createStyles, makeStyles, Paper, Switch, Theme, Typography } from '@material-ui/core';
import { ISlipcaseProps } from '../models/Products';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2)
        }
    }),
);

const Slipcase = (props: ISlipcaseProps) => {
    const { handleSlipcaseChange, value } = props;
    const classes = useStyles();
    return (
        <Paper elevation={3} className={classes.root}>
            <Typography variant="overline" component="span">Slipcase</Typography>
            <Switch
                checked={value}
                onChange={(e) => handleSlipcaseChange(e.target.checked)}
                name="slipcase"
                inputProps={{ 'aria-label': 'slipcase checkbox' }}
            />
        </Paper>
    )
}

export default Slipcase;
