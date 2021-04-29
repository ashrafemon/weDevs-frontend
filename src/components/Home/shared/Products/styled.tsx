import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    wrapper: {
        width: '100%',
        padding: 40,
        boxSizing: 'border-box'
    },
    textBox: {
        textAlign: 'center'
    },
    ourProductsText: {
        fontSize: '20px',
        color: '#56bb3e',
        backgroundColor: '#F6FEEC',
        fontWeight: 600,
        padding: '10px 20px',
        borderRadius: 30,
        display: 'inline-block',
        marginBottom: 10
    },
    products: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
    },
    productItem: {
        width: 'calc(100%/5)',
        padding: '10px',
        boxSizing: 'border-box',

        '@media(max-width: 990px)': {
            width: 'calc(100%/4)',
        },
        '@media(max-width: 767px)': {
            width: 'calc(100%/3)',
        },
        '@media(max-width: 600px)': {
            width: 'calc(100%/2)',
        },
        '@media(max-width: 500px)': {
            width: '100%',
        },
    },
    productCard: {
        backgroundColor: '#ffffff',
        border: '1px solid #D6D6D6',
        borderRadius: 10,
        overflow: 'hidden',
        transition: 'border 1000ms',
        '&:hover': {
            border: '1px solid #4FB68D'
        }
    },
    productCardMediaBox: {
        padding: 10,
        backgroundColor: '#F5F5F5',
        minHeight: 150,
        position: 'relative',
        cursor: 'pointer'
    },
    productCardMedia: {
        width: '100%',
        maxHeight: 500,
        objectFit: 'contain',
        boxShadow: '0 0 5px 2px #ededed'
    },
    productCardMediaActionBox: {
        position: 'absolute',
        top: 10,
        right: -50,
        width: 50,
        opacity: 0,
        visibility: 'hidden',
        transition: 'right 1000ms, opacity 1000ms, visibility 1000ms'
    },
    productCardMediaActionBoxShow: {
        right: 10,
        opacity: 1,
        visibility: 'visible',
    },
    productCardMediaActionBtn: {
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#ffffff !important',
        boxShadow: '0 0 2px 1px #ededed',
        '&:last-child': {
            marginBottom: 0
        }
    },
    productCardContent: {
        padding: '10px 20px',
    },
    productLink: {
        textDecoration: 'none',
        marginBottom: 10,
        display: 'block'
    },
    productName: {
        fontSize: '16px',
        fontFamily: 'Montserrat, sans-serif',
        color: '#000000',
        fontWeight: 800,
        transition: 'color 1000ms',
        '&:hover': {
            color: '#56bb3e'
        }
    },
    productPrice: {
        fontSize: '14px',
        fontFamily: 'Montserrat, sans-serif',
        color: '#000000',
        fontWeight: 600,
    },

    dialog: {},
    dialogTitle: {
        borderBottom: '1px solid #ededed'
    },
    dialogContent: {
        padding: 20
    },
    productImage: {
        width: '100%',
        objectFit: 'contain'
    },
    productInfoTitle: {
        fontSize: '24px',
        color: '#000000',
        fontWeight: 800,
        paddingBottom: 10,
        fontFamily: 'Montserrat, sans-serif'
    },
    productInfoCategory: {
        fontSize: '15px',
        color: '#000000',
        fontWeight: 600,
        marginBottom: 5,
        fontFamily: 'Montserrat, sans-serif'
    },
    productInfoName: {
        fontSize: '20px',
        color: '#000000',
        fontWeight: 800,
        marginBottom: 5,
        fontFamily: 'Montserrat, sans-serif'
    },
    productInfoPrice: {
        fontSize: '16px',
        color: '#000000',
        fontWeight: 400,
        marginBottom: 5,
        fontFamily: 'Montserrat, sans-serif'
    },
    productInfoDescription: {
        fontSize: '14px',
        lineHeight: 1.8,
        color: '#044313',
        marginBottom: 15,
        fontFamily: 'Montserrat, sans-serif'
    },
    productInfoActionBtn: {
        padding: 10,
        '&:last-child': {
            marginBottom: 0
        },
        '& svg': {
            marginRight: 5
        }
    },
    notFound: {
        textAlign: 'center',
        fontWeight: 600
    }
}))
