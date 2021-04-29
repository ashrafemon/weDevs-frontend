import React, {useState} from "react";
import {Box, Button, Card, CardContent, CardHeader, TextField} from "@material-ui/core";
import AdminLayout from "../../Layout";
import {useDispatch} from "react-redux";
import {createAdminCategory} from "../../../../store/actions/admin/category/action";
import {toggleNotification} from "../../../../store/actions/auth/action";
import {useHistory} from "react-router-dom";
import {CategoryFormType} from "../../../../types";

const CreateCategory = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [form, setForm] = useState<CategoryFormType>({name: ''})

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (form.name.length >= 3) {
            dispatch(createAdminCategory(form, () => history.push('/admin/categories')))

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
                    title="Add New Category Item"
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
                                helperText="Minimum 3 characters Required"
                            />
                        </Box>

                        <Button fullWidth type="submit" variant="contained" color="primary">Add Category</Button>
                    </form>
                </CardContent>
            </Card>
        </AdminLayout>
    )
}

export default CreateCategory
