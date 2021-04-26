import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    wrapper: {
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#F2F2F2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 0'
    },
    card: {
        width: '30%',
        borderRadius: 10,
        '@media(max-width: 990px)': {
            width: '50%',
        },
        '@media(max-width: 767px)': {
            width: '80%',
        },
        '@media(max-width: 500px)': {
            width: '90%',
        }
    },
    cardContent: {
        padding: '40px'
    },
    title: {
        fontSize: 30,
        color: '#383838',
        fontWeight: 800,
        textAlign: 'center',
        marginBottom: 20,
        userSelect: 'none'
    },
    logoBox: {
        textAlign: 'center',
        marginBottom: 20,

        '& svg': {
            fontSize: 60,
            backgroundColor: '#383838',
            color: '#ffffff',
            padding: 5,
            borderRadius: 8
        }
    },
    accountText: {
        fontSize: 14,
        color: '#B3B3B3',
        textAlign: 'center',

        '& a': {
            color: '#333333',
            textDecoration: 'none',
            fontWeight: 600
        }
    },
}))
