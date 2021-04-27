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
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {useStyles} from "./styled";
import AdminLayout from "../../Layout";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {deleteAdminOrder, fetchAdminOrders} from "../../../../store/actions/admin/orders/action";
import {OrderType} from "../../../../types";
import {useHistory} from "react-router-dom";

const Orders = () => {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const orders = useSelector((state: RootStateOrAny) => state.adminOrderStore.orders)

    useEffect(() => {
        dispatch(fetchAdminOrders())
    }, [dispatch])

    const editHandler = (id: number) => {
        history.push(`/admin/orders/${id}/edit`)
    }
    const deleteHandler = (id: number) => {
        dispatch(deleteAdminOrder(id))
    }

    return (
        <AdminLayout>
            <Card className={classes.wrapper} elevation={3}>
                <CardHeader title="Order List"/>
                <CardContent>
                    <TableContainer component={Paper}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>No.</TableCell>
                                    <TableCell>Product ID</TableCell>
                                    <TableCell>User ID</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.length ? orders.map((item: OrderType, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{item.product_id}</TableCell>
                                        <TableCell>{item.user_id}</TableCell>
                                        <TableCell>{item.quantity}</TableCell>
                                        <TableCell>{item.price}</TableCell>
                                        <TableCell>{item.status}</TableCell>
                                        <TableCell align="center">
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
                                        <TableCell colSpan={7} align="center">No orders found...</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </AdminLayout>
    )
}

export default Orders
