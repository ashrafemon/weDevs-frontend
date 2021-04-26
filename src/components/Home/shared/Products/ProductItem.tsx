import {
    Box,
    Button,
    Dialog,
    DialogContent,
    Divider,
    Grid,
    IconButton,
    TextField,
    Tooltip,
    Typography
} from "@material-ui/core";
import React, {useState} from "react";
import {useStyles} from "./styled";
import {Link} from 'react-router-dom'
import AirplayIcon from '@material-ui/icons/Airplay';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const ProductItem = () => {
    const classes = useStyles()

    const [showActionBtn, setShowActionBtn] = useState<boolean>(false)
    const [quickView, setQuickView] = useState<boolean>(false)

    return (
        <Box className={classes.productItem}>
            <Box className={classes.productCard}
                 onMouseEnter={() => setShowActionBtn(true)}
                 onMouseLeave={() => setShowActionBtn(false)}
            >
                <Box className={classes.productCardMediaBox}>
                    <img
                        className={classes.productCardMedia}
                        src="https://cdn.shopify.com/s/files/1/0752/0983/products/p-012-min_74c61cef-63bf-4782-ba1d-3c37b5204919.jpg?v=1606762854"
                        alt="Item"
                    />

                    <Box
                        className={`${classes.productCardMediaActionBox} ${showActionBtn && classes.productCardMediaActionBoxShow}`}>
                        <Tooltip title="Quick View" placement="left">
                            <IconButton
                                className={classes.productCardMediaActionBtn}
                                onClick={() => setQuickView(true)}
                            >
                                <AirplayIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Add To Cart" placement="left">
                            <IconButton className={classes.productCardMediaActionBtn}>
                                <AddShoppingCartIcon/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
                <Box className={classes.productCardContent}>
                    <Link to="/" className={classes.productLink}>
                        <Typography className={classes.productName}>Tomato</Typography>
                        <Typography className={classes.productPrice}>$12.07</Typography>
                    </Link>
                </Box>
            </Box>

            <Dialog open={quickView} onClose={() => setQuickView(false)} fullWidth maxWidth="md">
                <DialogContent className={classes.dialogContent}>
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
                                <Typography className={classes.productInfoName}>Tomato</Typography>
                                <Typography className={classes.productInfoPrice}>$12.07</Typography>
                            </Box>
                            <Box mb={2}>
                                <Typography className={classes.productInfoDescription}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi aperiam at
                                    deserunt dolore error fugiat illum, ipsam laboriosam molestiae, nihil nisi, porro
                                    repellendus temporibus vel. Expedita quibusdam repudiandae vel?
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
                </DialogContent>
            </Dialog>
        </Box>

    )
}

export default ProductItem
