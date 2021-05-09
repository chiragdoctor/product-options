import React, { useEffect, useState } from 'react'
import { createStyles, Grid, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import productOptions from '../data/productOptionsData.json';
import { IAttribute } from '../models/Products';
import { getProductOptions } from '../utils/ProductOptions';
import InputRadio from './InputRadio';
import Slipcase from './Slipcase';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingBottom: theme.spacing(4)
        },
    }),
);

const Filters = () => {
    const classes = useStyles();
    const [coloursFilter, setcoloursFilter] = useState<IAttribute[]>([]);
    const [paperFilter, setPaperFilter] = useState<IAttribute[]>([])
    useEffect(() => {
        const { colours, paperType } = getProductOptions(productOptions.products);
        setcoloursFilter(colours);
        setPaperFilter(paperType);
    }, []);

    return (
        <Grid container>
            <Grid item xs={12} sm={12} className={classes.root}>
                <InputRadio defaultValue='red' label="Color" data={coloursFilter} />

            </Grid>
            <Grid item xs={12} sm={12} className={classes.root}>
                <InputRadio defaultValue='dotted' label="Paper type" data={paperFilter} />
            </Grid>
            <Grid item xs={12} sm={12} className={classes.root}>
                <Slipcase />
            </Grid>
        </Grid>
    )
}

export default Filters
