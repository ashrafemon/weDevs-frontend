import React, {Suspense} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import routes from "./router";
import SuspenseLoading from "./components/Shared/SuspenseLoading";

const App: React.FC = () => {
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
            </Suspense>
        </BrowserRouter>
    )
}

export default App
