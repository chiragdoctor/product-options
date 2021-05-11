import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Filters from './Filters';
import ProductSummary from './ProductSummary';
import productOptions from '../data/productOptionsData.json';
import { IProduct } from '../models/Products';
import { APP_TITLE, COLOUR_TYPE, PAPER_TYPE, SLIPCASE_INCLUDED } from '../constants';
import Basket from './Basket';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        title: {
            textAlign: 'center',
            margin: theme.breakpoints.down('xs') ? theme.spacing(1) : theme.spacing(5),
        },
        titleFont: {
            fontSize: theme.breakpoints.down('xs') ? 30 : 38
        }
    }),
);

const ProductConfigurator = () => {
    const classes = useStyles();
    const [product, setProduct] = useState<IProduct>(productOptions.products[0]);
    const [colour, setColour] = useState<string>('red');
    const [paperType, setPaperType] = useState<string>('dotted');
    const [slipcase, setSlipcase] = useState<boolean>(false);
    const [basket, setBasket] = useState<IProduct[]>([]);

    const handleInputChange = (name: string, value: string) => {
        if (name.toLowerCase() === 'color') {
            setColour(value)
        }
        if (name.toLowerCase() === 'paper type') {
            setPaperType(value)
        }
    }

    const handleSlipcaseChange = (value: boolean) => {
        setSlipcase(value)
    }

    const getBasketPrice = () => {
        return basket.reduce((acc, currentValue) => acc + currentValue.price, 0);
    }

    const handleAddToBasket = () => {
        setBasket([...basket, product]);
    }

    const handleDeleteItem = (itemDesc: string) => {
        const items = basket.filter(b => b['item-description'] !== itemDesc)
        setBasket(items);
    }
    useEffect(() => {
        let filterByColour: any = [];
        let filterByPaperType: any = [];
        let filterBySlipcase: any = [];
        productOptions.products.forEach(product => {
            product.attributes.forEach(a => {
                if (a.type === COLOUR_TYPE && a.value === colour) {
                    filterByColour.push(product);
                }
            })
        })
        filterByColour.forEach((product: IProduct) => {
            product.attributes.forEach(a => {
                if (a.type === PAPER_TYPE && a.value === paperType) {
                    filterByPaperType.push(product);
                }
            })
        })
        filterByPaperType.forEach((product: IProduct) => {
            product.attributes.forEach(a => {
                if (a.type === SLIPCASE_INCLUDED && a.value === slipcase) {
                    filterBySlipcase.push(product);
                }
            })
        })
        setProduct(filterBySlipcase[0]);
    }, [colour, paperType, slipcase]);

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={12} className={classes.title}>
                    <Typography variant="h3" gutterBottom className={classes.titleFont}>
                        {APP_TITLE}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                    <ProductSummary product={product} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Filters handleInputChange={handleInputChange} handleSlipcaseChange={handleSlipcaseChange} colourValue={colour} paperTypeValue={paperType} slipcaseValue={slipcase} />
                    <Basket basket={basket} total={getBasketPrice()} handleAddToBasket={handleAddToBasket} handleDeleteItem={handleDeleteItem} />
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductConfigurator
