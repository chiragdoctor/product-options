import React from 'react'
import { Button, createStyles, Grid, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, makeStyles, Paper, Theme, Typography } from '@material-ui/core'
import { IBasket } from '../models/Products';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(1)
        },
        button: {
            marginTop: theme.spacing(2)
        }
    }),
);
const Basket = (props: IBasket) => {
    const { total, handleAddToBasket, basket, handleDeleteItem } = props;
    const classes = useStyles();

    const generateList = () => {
        return basket.map((b, index) => <ListItem key={`${b['item-description']}-${index}`}>
            <ListItemText
                primary={b['item-description']}
            />
            <ListItemSecondaryAction onClick={() => handleDeleteItem(b['item-description'])}>
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>)
    }
    return (
        <Paper elevation={3} className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={12}>
                    <Typography variant='h5' >Total: ${Number(total).toFixed(2)}</Typography>
                    <List dense>
                        {generateList()}
                    </List>
                    <Button fullWidth variant="contained" color="primary" className={classes.button} onClick={handleAddToBasket}>
                        Add to Basket
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Basket
