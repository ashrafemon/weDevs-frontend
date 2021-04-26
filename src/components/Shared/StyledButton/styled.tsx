import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    box: {
        padding: '20px 0'
    },
    button: {
        display: 'block',
        width: '100%',
        borderRadius: 30,
        background: 'linear-gradient(90deg, rgba(56,184,253,1) 0%, rgba(114,117,253,1) 56%, rgba(175,44,254,1) 100%)',
        color: '#ffffff',
        textTransform: 'uppercase',
        fontSize: 16,
        padding: 12,
        boxSizing: 'border-box',
    }
}))
