import React from 'react'
import { Card, CardContent, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import { IProduct } from '../models/Products';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            paddingBottom: theme.breakpoints.down('xs') ? theme.spacing(1) : theme.spacing(4)
        },
        pos: {
            marginBottom: theme.breakpoints.down('xs') ? theme.spacing(2) : theme.spacing(8),
        }
    }),
);

export interface IProductSummaryProps {
    product: IProduct;
}

const ProductSummary = (props: IProductSummaryProps) => {
    const classes = useStyles();
    const { product } = props;
    return (
        <Grid container>
            <Grid item xs={12} sm={12} className={classes.title}>
                <Typography variant='h5' >Product Summary</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
                <Card>
                    <CardContent>
                        <Typography variant="h5">
                            {product['item-description']}
                        </Typography>
                        <br />
                        Product Group:
                        <Typography className={classes.pos} color="textSecondary">
                            {product['product-group-label']}
                        </Typography>
                        Color:
                        <Typography className={classes.pos} color="textSecondary">
                            {product.attributes[0].value}
                        </Typography>
                        Paper Type:
                        <Typography className={classes.pos} color="textSecondary">
                            {product.attributes[1].value}
                        </Typography>
                        Slipcase Included:
                        <Typography className={classes.pos} color="textSecondary">
                            {product.attributes[2].value ? 'Yes' : 'No'}
                        </Typography>
                        <Typography variant='h5'>
                            Price: ${product.price}
                        </Typography>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default ProductSummary
