import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    wrapper: {
        width: '100%',
    },
    dialog: {
        '& .MuiDialog-paper': {
            borderRadius: 15
        }
    },
    dialogTitle: {
        borderBottom: '1px solid #ededed'
    },
    dialogContent: {
        padding: '15px 24px',
        '& .MuiDialogContent-root:first-child': {
            paddingTop: 0
        }
    },
    productImage: {
        width: '100%',
        maxWidth: '150px',
        height: '150px',
        borderRadius: '50%',
        border: '1px solid #ededed'
    }
}))
