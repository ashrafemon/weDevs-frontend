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
import {CategoryType} from '../../../../types';
import {deleteAdminCategory, fetchAdminCategories} from "../../../../store/actions/admin/category/action";
import {useHistory} from "react-router-dom";

const Categories = () => {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()

    const categories = useSelector((state: RootStateOrAny) => state.adminCategoryStore.categories)

    useEffect(() => {
        dispatch(fetchAdminCategories())
    }, [dispatch])

    const editHandler = (id: number) => {
        history.push(`/admin/categories/${id}/edit`)
    }

    const deleteHandler = (id: number) => {
        dispatch(deleteAdminCategory(id))
    }

    return (
        <AdminLayout>
            <Card className={classes.wrapper} elevation={3}>
                <CardHeader title="Category List"/>
                <CardContent>
                    <TableContainer component={Paper}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>No.</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {categories.length ? categories.map((item: CategoryType, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{item.name}</TableCell>
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
                                        <TableCell colSpan={3} align="center">No categories found...</TableCell>
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

export default Categories
