import React, {useEffect, useState} from "react";
import {Box, Button, Card, CardContent, CardHeader, TextField} from "@material-ui/core";
import AdminLayout from "../../Layout";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from 'react-router-dom'
import {toggleNotification} from "../../../../store/actions/auth/action";
import {fetchAdminOrder, updateAdminOrder} from "../../../../store/actions/admin/orders/action";
import {Autocomplete} from "@material-ui/lab";

type OrderFormType = {
    user_id: string,
    product_id: string,
    quantity: string,
    price: string,
    status: string
}

type CategoryParamType = {
    id: string
}

const EditOrder = () => {
    const params = useParams<CategoryParamType>()
    const history = useHistory()
    const dispatch = useDispatch()
    const [form, setForm] = useState<OrderFormType>({
        user_id: '',
        product_id: '',
        quantity: '',
        price: '',
        status: ''
    })
    const order = useSelector((state: RootStateOrAny) => state.adminOrderStore.order)
    const [statuses] = useState(['processing', 'shipped', 'delivered'])

    useEffect(() => {
        if (params.id) {
            dispatch(fetchAdminOrder(parseInt(params.id)))
        }
    }, [dispatch, params.id])

    useEffect(() => {
        setForm(order)
    }, [order])

    const statusChangeHandler = (value: any) => {
        console.log(value)
        setForm({
            ...form,
            status: value
        })
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (form.status.length) {
            dispatch(updateAdminOrder(form, () => history.push('/admin/orders')))
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
                    title="Update Order Item"
                    subheader="Please fill up all required field *"
                />
                <CardContent>
                    <form method="post" onSubmit={submitHandler}>
                        <Box mb={2}>
                            <Autocomplete
                                options={statuses}
                                getOptionLabel={(option: string) => option}
                                fullWidth
                                value={form.status}
                                onChange={(e, value) => statusChangeHandler(value)}
                                renderInput={(params) =>
                                    <TextField {...params} label="Status"/>
                                }
                            />
                        </Box>

                        <Button fullWidth type="submit" variant="contained" color="primary">Update Order</Button>
                    </form>
                </CardContent>
            </Card>
        </AdminLayout>
    )
}

export default EditOrder
