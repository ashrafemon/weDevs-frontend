import React, {useEffect, useRef, useState} from "react";
import {Box, Button, Card, CardContent, CardHeader, Grid, TextField} from "@material-ui/core";
import AdminLayout from "../../Layout";
import {Autocomplete} from "@material-ui/lab";
import {useStyles} from "./styled";
import DefaultImage from './../../../../assets/default-image.jpg'
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {fetchAdminCategories} from "../../../../store/actions/admin/category/action";
import {
    fetchAdminProduct,
    updateAdminProduct,
    uploadAdminProductImage
} from "../../../../store/actions/admin/products/action";
import {toggleNotification} from "../../../../store/actions/auth/action";
import {useHistory, useParams} from "react-router-dom";
import {ProductFormType, ProductParamType} from "../../../../types";

const EditProduct: React.FC = () => {
    const classes = useStyles()
    const params = useParams<ProductParamType>()
    const history = useHistory()
    const dispatch = useDispatch()
    const inputRef = useRef<HTMLInputElement>(null)
    const categories = useSelector((state: RootStateOrAny) => state.adminCategoryStore.categories)
    const product = useSelector((state: RootStateOrAny) => state.adminProductStore.product)
    const image_url = useSelector((state: RootStateOrAny) => state.adminProductStore.image_url)
    const [form, setForm] = useState<ProductFormType>({
        name: '',
        price: '',
        description: '',
        category_id: '',
        category_name: '',
        image: ''
    })
    const [previewImage, setPreviewImage] = useState<string | any>('')

    useEffect(() => {
        if (params.id) {
            dispatch(fetchAdminProduct(parseInt(params.id)))
            dispatch(fetchAdminCategories())
        }
    }, [dispatch, params.id])

    useEffect(() => {
        setForm(product)
        if (product.image) {
            setPreviewImage(product.image)
        }
        // eslint-disable-next-line
    }, [product])

    useEffect(() => {
        if (image_url.length) {
            setPreviewImage(image_url)
            setForm({
                ...form,
                image: image_url
            })
        }
        // eslint-disable-next-line
    }, [image_url])

    const inputRefClickHandler = () => {
        inputRef.current?.click()
    }
    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const imageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let files: any = e.target.files

        if (files.length) {
            dispatch(uploadAdminProductImage(files[0]))
        }
    }
    const categoryChangeHandler = (value: any) => {
        setForm({
            ...form,
            category_id: value.id,
            category_name: value.name
        })
    }
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (form.name.length && form.price.length && form.description.length && form.category_id !== '') {
            dispatch(updateAdminProduct(form, () => history.push('/admin/products')))
        } else {
            dispatch(toggleNotification({
                type: 'error',
                text: 'Please fill up all required field*',
                show: true
            }))
        }
    }

    return (
        <AdminLayout>
            <Card elevation={3}>
                <CardHeader
                    title="Edit Product Item"
                    subheader="Please fill up all required field *"
                />
                <CardContent>
                    <form method="post" onSubmit={submitHandler}>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item sm={8} xs={12}>
                                <Box mb={2}>
                                    <TextField
                                        label="Product Name"
                                        value={form.name}
                                        name="name"
                                        fullWidth
                                        onChange={inputChangeHandler}
                                        helperText="Required*"
                                    />
                                </Box>
                                <Box mb={2}>
                                    <TextField
                                        label="Product Price"
                                        value={form.price}
                                        name="price"
                                        fullWidth
                                        onChange={inputChangeHandler}
                                        helperText="Required*"
                                    />
                                </Box>
                                <Box mb={2}>
                                    <TextField
                                        label="Product Description"
                                        value={form.description}
                                        name="description"
                                        onChange={inputChangeHandler}
                                        helperText="Required*"
                                        fullWidth
                                        multiline
                                        rows={5}
                                        rowsMax={5}
                                    />
                                </Box>
                                <Box mb={2}>
                                    <Autocomplete
                                        options={categories}
                                        getOptionLabel={(option: { name: string, id: number }) => option.name}
                                        fullWidth
                                        onChange={(e, value) => categoryChangeHandler(value)}
                                        renderInput={(params) =>
                                            <TextField {...params} label="Category" helperText="Required*"/>
                                        }
                                    />
                                </Box>
                            </Grid>

                            <Grid item sm={4} xs={12}>
                                <Box mb={2}>
                                    <img
                                        src={previewImage ? previewImage : DefaultImage}
                                        alt="Default"
                                        className={classes.uploadImage}
                                    />
                                    <input
                                        ref={inputRef}
                                        type="file"
                                        className={classes.fileInput}
                                        onChange={imageChangeHandler}
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

                        <Button fullWidth type="submit" variant="contained" color="primary">Update Product</Button>
                    </form>
                </CardContent>
            </Card>
        </AdminLayout>
    )
}

export default EditProduct
