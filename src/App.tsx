import React, {Suspense, useEffect, useState} from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import routes from "./router";
import SuspenseLoading from "./components/Shared/SuspenseLoading";
import {Alert} from "@material-ui/lab";
import {Snackbar, Typography} from "@material-ui/core";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {me, toggleNotification} from "./store/actions/auth/action";
import ProtectedRoute from "./router/ProtectedRoute";
import PublicRoute from "./router/PublicRoute";

const App: React.FC = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const isAuthenticate = useSelector((state: RootStateOrAny) => state.authStore.isAuthenticate)
    const currentUser = useSelector((state: RootStateOrAny) => state.authStore.currentUser)
    const notification = useSelector((state: RootStateOrAny) => state.authStore.notification)

    const closeAlertHandler = () => {
        dispatch(toggleNotification({type: '', text: '', show: false}))
    }

    useEffect(() => {
        setLoading(true)
        dispatch(me(() => setLoading(false)))
    }, [dispatch])

    if (loading) {
        return <SuspenseLoading/>
    }

    return (
        <BrowserRouter>
            <Suspense fallback={<SuspenseLoading/>}>
                <Switch>
                    {routes.map((item, i) => (
                        item.requiresAuth ? (
                            <ProtectedRoute
                                isAuthenticate={isAuthenticate}
                                key={i}
                                path={item.path}
                                exact={item.exact}
                                component={item.component}
                            />
                        ) : (
                            <PublicRoute
                                isAuthenticate={isAuthenticate}
                                currentUser={currentUser}
                                key={i}
                                path={item.path}
                                exact={item.exact}
                                component={item.component}
                            />
                        )
                    ))}
                </Switch>
                <Snackbar
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                    open={notification.show}
                    autoHideDuration={4000}
                    onClose={closeAlertHandler}
                >
                    <Alert severity={notification.type}>
                        <Typography>{notification.text}</Typography>
                    </Alert>
                </Snackbar>
            </Suspense>
        </BrowserRouter>
    )
}

export default App
