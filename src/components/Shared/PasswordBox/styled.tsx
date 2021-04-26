import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    box: {
        marginBottom: 15,
        position: 'relative'
    },
    btn: {
        backgroundColor: 'transparent',
        color: '#B3B3B3',
        padding: 1,
        position: 'absolute',
        top: '50%',
        right: 5,
        transform: 'translateY(-30%)',
        zIndex: 99
    }
}))
