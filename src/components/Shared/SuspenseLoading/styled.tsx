import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    wrapper: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        boxSizing: 'border-box'
    },
    spinner: {
        width: 120,
        height: 120
    }
}))
