import {Box, IconButton, Tooltip, Typography} from "@material-ui/core";
import React, {useState} from "react";
import {useStyles} from "./styled";
import {Link} from 'react-router-dom'
import AirplayIcon from '@material-ui/icons/Airplay';
import {ProductType} from "../../../../types";
import {useDispatch} from "react-redux";
import {setProduct, toggleDialog} from "../../../../store/actions/products/action";
import DefaultImage from './../../../../assets/default-image.jpg'

type IProps = {
    item: ProductType
}

const ProductItem: React.FC<IProps> = ({item}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [showActionBtn, setShowActionBtn] = useState<boolean>(false)

    const showQuickViewHandler = () => {
        dispatch(setProduct(item.id))
        dispatch(toggleDialog(true))
    }

    return (
        <Box className={classes.productItem}>
            <Box className={classes.productCard}
                 onMouseEnter={() => setShowActionBtn(true)}
                 onMouseLeave={() => setShowActionBtn(false)}
            >
                <Box className={classes.productCardMediaBox}>
                    <img
                        className={classes.productCardMedia}
                        src={item.image !== '' ? item.image : DefaultImage}
                        alt="Item"
                    />

                    <Box
                        className={`${classes.productCardMediaActionBox} ${showActionBtn && classes.productCardMediaActionBoxShow}`}>
                        <Tooltip title="Quick View" placement="left">
                            <IconButton
                                className={classes.productCardMediaActionBtn}
                                onClick={showQuickViewHandler}
                            >
                                <AirplayIcon/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
                <Box className={classes.productCardContent}>
                    <Link to="/" className={classes.productLink}>
                        <Typography className={classes.productName}>Name: {item.name}</Typography>
                        <Typography className={classes.productPrice}>Price: {item.price}</Typography>
                    </Link>
                </Box>
            </Box>
        </Box>

    )
}

export default ProductItem
