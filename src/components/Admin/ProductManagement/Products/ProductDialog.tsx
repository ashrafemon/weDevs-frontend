import React from "react";
import {Dialog, DialogContent, DialogTitle, Grid, Typography} from "@material-ui/core";
import DefaultImage from "../../../../assets/default-image.jpg";
import {useStyles} from "./styled";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {toggleAdminDialog} from "../../../../store/actions/admin/products/action";

const ProductDialog = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const product = useSelector((state: RootStateOrAny) => state.adminProductStore.product)
    const showDialog = useSelector((state: RootStateOrAny) => state.adminProductStore.showDialog)

    const dialogCloseHandler = () => {
        dispatch(toggleAdminDialog(false))
    }

    return (
        <Dialog className={classes.dialog} open={showDialog} maxWidth="sm" fullWidth
                onClose={dialogCloseHandler}>
            <DialogTitle className={classes.dialogTitle}>Product Item</DialogTitle>
            <DialogContent className={classes.dialogContent}>
                {Object.keys(product).length && (
                    <Grid container spacing={1} alignItems="center">
                        <Grid item sm={4} xs={12}>
                            <img className={classes.productImage} src={DefaultImage} alt="Default"/>
                        </Grid>
                        <Grid item sm={8} xs={12}>
                            <Typography><strong>Name:</strong> {product.name}</Typography>
                            <Typography><strong>SKU:</strong> {product.sku}</Typography>
                            <Typography><strong>Price:</strong> {product.price}</Typography>
                            <Typography><strong>Category:</strong> {product.category_id}</Typography>
                            <Typography><strong>Description:</strong> {product.description}</Typography>
                        </Grid>
                    </Grid>
                )}
            </DialogContent>
        </Dialog>
    )
}

export default ProductDialog
