import React from "react";
import {Box} from "@material-ui/core";
import Header from "./shared/Header";
import Process from "./shared/Process/Process";
import Products from "./shared/Products/Products";

const Home: React.FC = () => {
    return (
        <Box>
            <Header/>
            <Products/>
            <Process/>
        </Box>
    )
}

export default Home
