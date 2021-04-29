import React, {useEffect, useState} from "react";
import {Box, Button, Dialog, DialogContent, Divider, Grid, TextField, Typography} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {useStyles} from "./styled";
import {toggleDialog} from "../../../../store/actions/products/action";
import DefaultImage from './../../../../assets/default-image.jpg';
import {createOrder} from "../../../../store/actions/orders/action";
import {toggleNotification} from "../../../../store/actions/auth/action";
import {OrderPlaceFormType} from "../../../../types";

const ProductDialog: React.FC = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const product = useSelector((state: RootStateOrAny) => state.productStore.product)
    const showDialog = useSelector((state: RootStateOrAny) => state.productStore.showDialog)

    const [form, setForm] = useState<OrderPlaceFormType>({
        product_id: '',
        product_name: '',
        quantity: '',
        price: 0,
        shipping_address: ''
    })

    useEffect(() => {
        if (product) {
            setForm({
                ...form,
                product_id: product.id,
                product_name: product.name,
            })
        }
        // eslint-disable-next-line
    }, [product])

    const dialogCloseHandler = () => {
        dispatch(toggleDialog(false))
    }

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const quantityChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            quantity: e.target.value,
            price: parseInt(e.target.value) * product.price
        })
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (form.product_id.length && form.product_name.length && form.quantity.length && form.shipping_address.length && form.price) {
            dispatch(createOrder(form, () => dialogCloseHandler()))
        } else {
            dispatch(toggleNotification({
                type: 'error',
                text: 'Please fill up all required field*',
                show: true
            }))
        }
    }

    return (
        <Dialog open={showDialog} onClose={dialogCloseHandler} fullWidth maxWidth="md">
            <DialogContent className={classes.dialogContent}>
                {Object.keys(product).length && (
                    <Grid container spacing={3} alignItems="center">
                        <Grid item sm={6} xs={12}>
                            <img
                                className={classes.productCardMedia}
                                src={product.image ? product.image : DefaultImage}
                                alt="Item"
                            />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <Typography className={classes.productInfoTitle}>Product Information</Typography>
                            <Divider/>

                            <Box mt={4} mb={2}>
                                <Typography
                                    className={classes.productInfoCategory}>Category: {product.category_name}</Typography>
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

                                <form method="POST" onSubmit={submitHandler}>
                                    <Box mb={2}>
                                        <TextField
                                            type="number"
                                            label="Shipping Address"
                                            name="shipping_address"
                                            multiline
                                            rows={2}
                                            rowsMax={2}
                                            value={form.shipping_address}
                                            onChange={inputChangeHandler}
                                            helperText="Required*"
                                            fullWidth
                                        />
                                    </Box>

                                    <Grid container alignItems="center" spacing={2}>
                                        <Grid item sm={7} xs={12}>
                                            <TextField
                                                type="number"
                                                label="Quantity"
                                                name="quantity"
                                                value={form.quantity}
                                                onChange={quantityChangeHandler}
                                                helperText="Required*"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item sm={5} xs={12}>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={classes.productInfoActionBtn}
                                                size="small"
                                            >
                                                <AddShoppingCartIcon/> Confirm Order
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Box>
                        </Grid>
                    </Grid>
                )}
            </DialogContent>
        </Dialog>
    )
}

export default ProductDialog
