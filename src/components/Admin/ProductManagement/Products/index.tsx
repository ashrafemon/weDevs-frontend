import React, {useState} from "react";
import {
    Card,
    CardContent,
    CardHeader,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import OpenWithIcon from '@material-ui/icons/OpenWith';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {useStyles} from "./styled";
import AdminLayout from "../../Layout";
import DefaultImage from './../../../../assets/default-image.jpg'

const Products = () => {
    const classes = useStyles()
    const [showProduct, setShowProduct] = useState<boolean>(false)

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
                                    <TableCell>Category</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>01</TableCell>
                                    <TableCell>Tomato</TableCell>
                                    <TableCell>Fruits</TableCell>
                                    <TableCell>$12.07</TableCell>
                                    <TableCell align="center">
                                        <IconButton onClick={() => setShowProduct(true)}>
                                            <OpenWithIcon/>
                                        </IconButton>
                                        <IconButton>
                                            <EditIcon/>
                                        </IconButton>
                                        <IconButton>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>

            <Dialog className={classes.dialog} open={showProduct} maxWidth="sm" fullWidth
                    onClose={() => setShowProduct(false)}>
                <DialogTitle className={classes.dialogTitle}>Product Item</DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item sm={4} xs={12}>
                            <img className={classes.productImage} src={DefaultImage} alt="Default"/>
                        </Grid>
                        <Grid item sm={8} xs={12}>
                            <Typography><strong>Name:</strong> Tomato</Typography>
                            <Typography><strong>SKU:</strong> sfsdkjfhskffk</Typography>
                            <Typography><strong>Price:</strong> $12.07</Typography>
                            <Typography><strong>Category:</strong> Fruits</Typography>
                            <Typography><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Eius illo magnam optio quia quibusdam ratione reprehenderit. At
                                cupiditate esse, explicabo hic id inventore iusto neque nostrum, odit, rerum tenetur
                                vitae!
                            </Typography>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </AdminLayout>
    )
}

export default Products
