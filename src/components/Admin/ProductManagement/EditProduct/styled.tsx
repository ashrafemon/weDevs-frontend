import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    fileInput: {
        display: 'none'
    },
    uploadImage: {
        width: '100%',
        maxWidth: '150px',
        height: '150px',
        objectFit: 'cover',
        borderRadius: '50%',
        border: '1px solid #ededed',
        display: 'block',
        margin: '0 auto 20px'
    }
}))
