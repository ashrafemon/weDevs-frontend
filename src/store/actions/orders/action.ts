import {api_url} from "../../../utils/constains";
import {toggleNotification} from "../auth/action";

export const createOrder = (data: any, cb: Function = () => {
}) => (dispatch: Function, getStore: any) => {
    const authStore = getStore().authStore
    const token = authStore.token || localStorage.getItem('token')

    if (token) {
        fetch(api_url + 'orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.status === 'done') {
                    dispatch(toggleNotification({
                        type: 'success',
                        text: res.message,
                        show: true
                    }))
                } else if (res.status === 'error') {
                    dispatch(toggleNotification({
                        type: 'error',
                        text: res.message,
                        show: true
                    }))
                }
                cb()
            })
            .catch(err => console.log(err))
    }

}
