import React, {useEffect} from "react";
import {
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import OpenWithIcon from '@material-ui/icons/OpenWith';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {useStyles} from "./styled";
import AdminLayout from "../../Layout";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {
    deleteAdminProduct,
    fetchAdminProducts,
    setAdminProduct,
    toggleAdminDialog
} from "../../../../store/actions/admin/products/action";
import {ProductType} from '../../../../types';
import ProductDialog from "./ProductDialog";
import {useHistory} from "react-router-dom";

const Products = () => {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const products = useSelector((state: RootStateOrAny) => state.adminProductStore.products)

    useEffect(() => {
        dispatch(fetchAdminProducts())
    }, [dispatch])

    const quickViewHandler = (id: number) => {
        dispatch(setAdminProduct(id))
        dispatch(toggleAdminDialog(true))
    }
    const editHandler = (id: number) => {
        history.push(`/admin/products/${id}/edit`)
    }
    const deleteHandler = (id: number) => {
        dispatch(deleteAdminProduct(id))
    }

    return (
        <AdminLayout>
            <Card className={classes.wrapper} elevation={3}>
                <CardHeader title="Products List"/>
                <CardContent>
                    <TableContainer component={Paper}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>No.</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>SKU</TableCell>
                                    <TableCell>Category</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.length ? products.map((item: ProductType, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.sku}</TableCell>
                                        <TableCell>{item.category_name}</TableCell>
                                        <TableCell>{item.price}</TableCell>
                                        <TableCell align="center">
                                            <IconButton onClick={quickViewHandler.bind(this, item.id)}>
                                                <OpenWithIcon/>
                                            </IconButton>
                                            <IconButton onClick={editHandler.bind(this, item.id)}>
                                                <EditIcon/>
                                            </IconButton>
                                            <IconButton onClick={deleteHandler.bind(this, item.id)}>
                                                <DeleteIcon/>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                )) : (
                                    <TableRow>
                                        <TableCell colSpan={5} align="center">No products found...</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>

            <ProductDialog/>
        </AdminLayout>
    )
}

export default Products
