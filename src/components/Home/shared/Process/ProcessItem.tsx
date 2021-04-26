import React from "react";
import {Box, Card, CardContent, Typography} from "@material-ui/core";
import {useStyles} from "./styled";

type IProps = {
    img: string,
    title: string
}

const ProcessItem: React.FC<IProps> = ({img, title}) => {
    const classes = useStyles()
    return (
        <Box className={classes.processItem}>
            <Card className={classes.processCard} elevation={0}>
                <CardContent className={classes.processCardContent}>
                    <img
                        className={classes.processImage}
                        src={img}
                        alt="Process Item 1"
                    />
                    <Typography className={classes.processTitle}>{title}</Typography>
                    <Typography className={classes.processText}>
                        Lorem Ipsum is simply dummy text of the printing and type setting industry.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default ProcessItem
