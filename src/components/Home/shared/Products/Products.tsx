import {Box, Typography} from "@material-ui/core";
import React from "react";
import ProductItem from "./ProductItem";
import {useStyles} from "./styled";

const Products = () => {
    const classes = useStyles()

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.textBox}>
                <Typography className={classes.ourProductsText}>Our products</Typography>
            </Box>


            <Box className={classes.products}>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </Box>

        </Box>
    )
}

export default Products
