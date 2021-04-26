import React, {useState} from "react";
import {Box} from "@material-ui/core";
import {useStyles} from "./styled";
import ProcessItem from "./ProcessItem";

type ISteps = {
    img: string,
    title: string
}

const Process = () => {
    const classes = useStyles()

    const [steps] = useState<ISteps[]>([
        {
            img: 'https://cdn.shopify.com/s/files/1/0752/0983/files/icon-01_2048x.png?v=1602181639',
            title: 'Choose Fruits',
        },
        {
            img: 'https://cdn.shopify.com/s/files/1/0752/0983/files/icon-02_2048x.png?v=1602181694',
            title: 'Place Your Address',
        },
        {
            img: 'https://cdn.shopify.com/s/files/1/0752/0983/files/icon-03_2048x.png?v=1602181739',
            title: 'Payment & Delivery',
        },
    ])

    return (
        <Box className={classes.processBox}>
            {steps.map((item, i) => (
                <ProcessItem key={i} img={item.img} title={item.title}/>
            ))}
        </Box>
    )
}

export default Process
