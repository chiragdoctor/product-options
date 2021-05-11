import React, { useEffect, useState } from 'react'
import { createStyles, Grid, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import productOptions from '../data/productOptionsData.json';
import { IAttribute, IFiltersProps } from '../models/Products';
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

const Filters = (props: IFiltersProps) => {
    const classes = useStyles();
    const { handleInputChange, handleSlipcaseChange, colourValue, paperTypeValue, slipcaseValue } = props;
    const [coloursFilter, setcoloursFilter] = useState<IAttribute[]>([]);
    const [paperFilter, setPaperFilter] = useState<IAttribute[]>([])
    useEffect(() => {
        const { colours, paperType } = getProductOptions(productOptions.products);
        setcoloursFilter(colours);
        setPaperFilter(paperType);
    }, []);

    return (
        <Grid container>
            <Typography variant='h5' className={classes.root}>Product Filters</Typography>
            <Grid item xs={12} sm={12} className={classes.root}>
                <InputRadio label="Color" data={coloursFilter} handleInputChange={handleInputChange} value={colourValue} />

            </Grid>
            <Grid item xs={12} sm={12} className={classes.root}>
                <InputRadio label="Paper type" data={paperFilter} handleInputChange={handleInputChange} value={paperTypeValue} />
            </Grid>
            <Grid item xs={12} sm={12} className={classes.root}>
                <Slipcase handleSlipcaseChange={handleSlipcaseChange} value={slipcaseValue} />
            </Grid>
        </Grid>
    )
}

export default Filters
