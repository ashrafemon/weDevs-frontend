import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    '@keyframes slideIn': {
        '0%': {
            transform: 'translateX(-100%)'
        },
        '100%': {
            transform: 'translateX(0%)'
        }
    },
    wrapper: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        padding: 20,
        boxSizing: 'border-box',
        animation: "$slideIn 2000ms ease-in",
    },
    title: {
        fontSize: '60px',
        fontFamily: 'Montserrat, sans-serif',
        color: '#34373F',
        fontWeight: 800,
        textAlign: 'center'
    },
    subTitle: {
        fontSize: '32px',
        fontFamily: 'Montserrat, sans-serif',
        color: '#34373F',
        fontWeight: 600,
        textAlign: 'center'
    }
}))
