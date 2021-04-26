import React, {useRef} from "react";
import {Box, Button, Card, CardContent, CardHeader, Grid, TextField} from "@material-ui/core";
import AdminLayout from "../../Layout";
import {Autocomplete} from "@material-ui/lab";
import {useStyles} from "./styled";
import DefaultImage from './../../../../assets/default-image.jpg'

const CreateProduct = () => {
    const classes = useStyles()
    const inputRef = useRef<HTMLInputElement>(null)
    const top100Films = [
        {title: 'The Shawshank Redemption', year: 1994},
        {title: 'The Godfather', year: 1972},
        {title: 'The Godfather: Part II', year: 1974},
        {title: 'The Dark Knight', year: 2008},
        {title: '12 Angry Men', year: 1957},
        {title: "Schindler's List", year: 1993},
        {title: 'Pulp Fiction', year: 1994},
        {title: 'The Lord of the Rings: The Return of the King', year: 2003},
        {title: 'The Good, the Bad and the Ugly', year: 1966},
    ];

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Submit')
    }

    const inputRefClickHandler = () => {
        inputRef.current?.click()
    }

    return (
        <AdminLayout>
            <Card elevation={3}>
                <CardHeader
                    title="Add New Product Item"
                    subheader="Please fill up all required field *"
                />
                <CardContent>
                    <form method="post" onSubmit={submitHandler}>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item sm={8} xs={12}>
                                <Box mb={2}>
                                    <TextField label="Product Name" fullWidth/>
                                </Box>
                                <Box mb={2}>
                                    <TextField label="Product Price" fullWidth/>
                                </Box>
                                <Box mb={2}>
                                    <TextField label="Product Description" fullWidth multiline rows={5} rowsMax={5}/>
                                </Box>
                                <Box mb={2}>
                                    <Autocomplete
                                        options={top100Films}
                                        getOptionLabel={(option) => option.title}
                                        fullWidth
                                        renderInput={(params) =>
                                            <TextField {...params} label="Category"/>
                                        }
                                    />
                                </Box>
                            </Grid>

                            <Grid item sm={4} xs={12}>
                                <Box mb={2}>
                                    <img src={DefaultImage} alt="Default" className={classes.uploadImage}/>
                                    <input
                                        ref={inputRef}
                                        type="file"
                                        className={classes.fileInput}
                                    />
                                    <Button
                                        type="button"
                                        variant="outlined"
                                        color="primary"
                                        fullWidth
                                        onClick={inputRefClickHandler}
                                    >
                                        Upload Image
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>

                        <Button fullWidth type="submit" variant="contained" color="primary">Add Product</Button>
                    </form>
                </CardContent>
            </Card>
        </AdminLayout>
    )
}

export default CreateProduct
