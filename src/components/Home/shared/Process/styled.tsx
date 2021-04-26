import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    processBox: {
        width: '100%',
        minHeight: '400px',
        padding: 40,
        backgroundColor: '#F5F5F5',
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        '@media(max-width: 600px)': {
            flexDirection: 'column'
        }
    },
    processItem: {
        width: 'calc(100%/3)',
        padding: '20px',
        boxSizing: 'border-box',

        '@media(max-width: 767px)': {
            width: 'calc(100%/2)'
        },
        '@media(max-width: 600px)': {
            width: '100%'
        }
    },
    processCard: {
        borderRadius: 10,
    },
    processCardContent: {
        padding: '50px 30px !important',
        boxSizing: 'border-box',
        textAlign: 'center',
    },
    processImage: {
        minWidth: 90,
        minHeight: 90,
        border: '2px solid #044313',
        objectFit: 'contain',
        borderRadius: '50%',
        padding: 10,
        backgroundColor: '#F7FFED',
        boxSizing: 'border-box',
        marginBottom: 15
    },
    processTitle: {
        fontSize: '16px',
        fontWeight: 600,
        color: '#044313',
        marginBottom: 15
    },
    processText: {
        fontSize: '14px',
        color: '#666666'
    }
}))
