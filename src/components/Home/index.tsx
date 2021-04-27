import React, {useEffect} from "react";
import {Box} from "@material-ui/core";
import Header from "./shared/Header";
import Process from "./shared/Process/Process";
import Products from "./shared/Products/Products";
import {useDispatch} from "react-redux";
import {fetchProducts} from "../../store/actions/products/action";

const Home: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <Box>
            <Header/>
            <Products/>
            <Process/>
        </Box>
    )
}

export default Home
