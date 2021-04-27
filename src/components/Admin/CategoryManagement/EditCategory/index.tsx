import React, {useEffect, useState} from "react";
import {Box, Button, Card, CardContent, CardHeader, TextField} from "@material-ui/core";
import AdminLayout from "../../Layout";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {fetchAdminCategory, updateAdminCategory} from "../../../../store/actions/admin/category/action";
import {useHistory, useParams} from 'react-router-dom'
import {toggleNotification} from "../../../../store/actions/auth/action";

type CategoryFormType = {
    name: string,
}

type CategoryParamType = {
    id: string
}

const EditCategory = () => {
    const params = useParams<CategoryParamType>()
    const history = useHistory()
    const dispatch = useDispatch()
    const [form, setForm] = useState<CategoryFormType>({name: ''})
    const category = useSelector((state: RootStateOrAny) => state.adminCategoryStore.category)

    useEffect(() => {
        if (params.id) {
            dispatch(fetchAdminCategory(parseInt(params.id)))
        }
    }, [dispatch, params.id])

    useEffect(() => {
        setForm(category)
    }, [category])

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (form.name.length > 3) {
            dispatch(updateAdminCategory(form))
            history.push('/admin/categories')
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
                    title="Update Category Item"
                    subheader="Please fill up all required field *"
                />
                <CardContent>
                    <form method="post" onSubmit={submitHandler}>
                        <Box mb={2}>
                            <TextField
                                label="Category Name"
                                value={form.name}
                                name="name"
                                fullWidth
                                onChange={inputChangeHandler}
                            />
                        </Box>

                        <Button fullWidth type="submit" variant="contained" color="primary">Update Category</Button>
                    </form>
                </CardContent>
            </Card>
        </AdminLayout>
    )
}

export default EditCategory
