import React from "react";
import {Box, Button, Dialog, DialogContent, Divider, Grid, TextField, Typography} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {useStyles} from "./styled";
import {toggleDialog} from "../../../../store/actions/products/action";

const ProductDialog = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const product = useSelector((state: RootStateOrAny) => state.productStore.product)
    const showDialog = useSelector((state: RootStateOrAny) => state.productStore.showDialog)

    const dialogCloseHandler = () => {
        dispatch(toggleDialog(false))
    }

    return (
        <Dialog open={showDialog} onClose={dialogCloseHandler} fullWidth maxWidth="md">
            <DialogContent className={classes.dialogContent}>
                {Object.keys(product).length && (
                    <Grid container spacing={3}>
                        <Grid item sm={6} xs={12}>
                            <img
                                className={classes.productCardMedia}
                                src="https://cdn.shopify.com/s/files/1/0752/0983/products/p-012-min_74c61cef-63bf-4782-ba1d-3c37b5204919.jpg?v=1606762854"
                                alt="Item"
                            />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <Typography className={classes.productInfoTitle}>Product Information</Typography>
                            <Divider/>

                            <Box mt={4} mb={2}>
                                <Typography className={classes.productInfoCategory}>Category: Fruits</Typography>
                                <Typography className={classes.productInfoName}>
                                    {product.name && product.name}
                                </Typography>
                                <Typography className={classes.productInfoPrice}>
                                    {product.name && product.price}
                                </Typography>
                            </Box>
                            <Box mb={2}>
                                <Typography className={classes.productInfoDescription}>
                                    {product.description}
                                </Typography>

                                <Grid container alignItems="center" spacing={2}>
                                    <Grid item sm={8} xs={12}>
                                        <TextField type="number" label="Quantity" fullWidth/>
                                    </Grid>
                                    <Grid item sm={4} xs={12}>
                                        <Button fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={classes.productInfoActionBtn}
                                                size="small"
                                        >
                                            <AddShoppingCartIcon/> Add to Cart
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                )}
            </DialogContent>
        </Dialog>
    )
}

export default ProductDialog
