import React, { Fragment, useEffect, useState } from 'react'
import { createStyles, Grid, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import productOptions from '../data/productOptionsData.json';
import { IAttribute, IFiltersProps } from '../models/Products';
import { getProductOptions } from '../utils/ProductOptions';
import InputRadio from './InputRadio';
import Slipcase from './Slipcase';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import InputSelect from './InputSelect';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingBottom: theme.breakpoints.down('xs') ? theme.spacing(1) : theme.spacing(4)
        },
    }),
);

const Filters = (props: IFiltersProps) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
    const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));

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
            {matchesXS && (
                <Fragment>
                    <Grid item xs={12} className={classes.root}>
                        <InputSelect label="Color" data={coloursFilter} handleInputChange={handleInputChange} value={colourValue} />
                    </Grid>
                    <Grid item xs={12} className={classes.root}>
                        <InputSelect label="Paper type" data={paperFilter} handleInputChange={handleInputChange} value={paperTypeValue} />
                    </Grid>
                    <Grid item xs={12} className={classes.root}>
                        <Slipcase handleSlipcaseChange={handleSlipcaseChange} value={slipcaseValue} />
                    </Grid>
                </Fragment>
            )}
            {matchesSM && (
                <Fragment>
                    <Grid item sm={12} className={classes.root}>
                        <InputRadio label="Color" data={coloursFilter} handleInputChange={handleInputChange} value={colourValue} />

                    </Grid>
                    <Grid item sm={12} className={classes.root}>
                        <InputRadio label="Paper type" data={paperFilter} handleInputChange={handleInputChange} value={paperTypeValue} />
                    </Grid>
                    <Grid item sm={12} className={classes.root}>
                        <Slipcase handleSlipcaseChange={handleSlipcaseChange} value={slipcaseValue} />
                    </Grid>
                </Fragment>
            )}
        </Grid>
    )
}

export default Filters
