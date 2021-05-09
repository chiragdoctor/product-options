import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Filters from './Filters';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
  }),
);

const ProductConfigurator = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h3" gutterBottom>
                        Product Configurator
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                    Product Summary
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Filters />
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductConfigurator
