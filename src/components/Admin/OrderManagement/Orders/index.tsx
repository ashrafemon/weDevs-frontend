import React, {useState} from "react";
import {
    Box,
    Button,
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
    TextField,
    Typography
} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {useStyles} from "./styled";
import AdminLayout from "../../Layout";
import DefaultImage from "../../../../assets/default-image.jpg";
import {Autocomplete} from "@material-ui/lab";

const Orders = () => {
    const classes = useStyles()
    const [statuses] = useState([
        {title: 'Processing'},
        {title: 'Shipped'},
        {title: 'Delivered'},
    ]);
    const [showOrder, setShowOrder] = useState<boolean>(false)

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
                                    <TableCell>Product</TableCell>
                                    <TableCell>Username</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>01</TableCell>
                                    <TableCell>Tomato</TableCell>
                                    <TableCell>Ashraf Emon</TableCell>
                                    <TableCell>10</TableCell>
                                    <TableCell>Pending</TableCell>
                                    <TableCell align="center">
                                        <IconButton onClick={() => setShowOrder(true)}>
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

            <Dialog className={classes.dialog} open={showOrder} maxWidth="sm" fullWidth
                    onClose={() => setShowOrder(false)}>
                <DialogTitle className={classes.dialogTitle}>Order Item</DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item sm={4} xs={12}>
                            <img className={classes.productImage} src={DefaultImage} alt="Default"/>
                        </Grid>
                        <Grid item sm={8} xs={12}>
                            <Typography><strong>Order By:</strong> Ashraf Emon</Typography>
                            <Typography><strong>Product Name:</strong> Tomato</Typography>
                            <Typography><strong>SKU:</strong> sfsdkjfhskffk</Typography>
                            <Typography><strong>Quantity:</strong> 10</Typography>
                            <Typography><strong>Price:</strong> $12.07</Typography>
                            <Typography><strong>Category:</strong> Fruits</Typography>
                            <Box mb={2}>
                                <Autocomplete
                                    options={statuses}
                                    getOptionLabel={(option) => option.title}
                                    fullWidth
                                    renderInput={(params) =>
                                        <TextField {...params} label="Status"/>
                                    }
                                />
                            </Box>

                            <Button variant="contained" color="primary" fullWidth>Update</Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </AdminLayout>
    )
}

export default Orders
