import React, {Suspense} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import routes from "./router";
import SuspenseLoading from "./components/Shared/SuspenseLoading";
import {Alert} from "@material-ui/lab";
import {Snackbar, Typography} from "@material-ui/core";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {toggleNotification} from "./store/actions/auth/action";

const App: React.FC = () => {
    const dispatch = useDispatch()
    const notification = useSelector((state: RootStateOrAny) => state.authStore.notification)

    const closeAlertHandler = () => {
        dispatch(toggleNotification({type: '', text: '', show: false}))
    }

    return (
        <BrowserRouter>
            <Suspense fallback={<SuspenseLoading/>}>
                <Switch>
                    {routes.map((item, i) => (
                        <Route
                            key={i}
                            path={item.path}
                            exact={item.exact}
                            component={item.component}
                        />
                    ))}
                </Switch>
                <Snackbar
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                    open={notification.show}
                    autoHideDuration={6000}
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
