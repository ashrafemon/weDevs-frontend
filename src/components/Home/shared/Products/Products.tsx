import {Box, Typography} from "@material-ui/core";
import React from "react";
import ProductItem from "./ProductItem";
import {useStyles} from "./styled";
import {RootStateOrAny, useSelector} from "react-redux";
import {ProductType} from "../../../../types";
import ProductDialog from "./ProductDialog";

const Products: React.FC = () => {
    const classes = useStyles()
    const products = useSelector((state: RootStateOrAny) => state.productStore.products)

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.textBox}>
                <Typography className={classes.ourProductsText}>Our products</Typography>
            </Box>

            <Box className={classes.products}>
                {products.length ? products.map((item: ProductType, index: number) => (
                    <ProductItem key={index} item={item}/>
                )) : (
                    <Typography className={classes.notFound}>No Products Available</Typography>
                )}
            </Box>

            <ProductDialog/>
        </Box>
    )
}

export default Products
