import React from "react";
import {Collapse, List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles} from "@material-ui/core";
import StoreIcon from "@material-ui/icons/Store";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useHistory} from "react-router-dom";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import AddIcon from '@material-ui/icons/Add';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(theme => ({
    innerListItem: {
        paddingLeft: theme.spacing(4)
    }
}))

const SideNav = () => {
    const classes = useStyles()
    const history = useHistory()
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            component="nav"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Management Nav
                </ListSubheader>
            }
        >
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <StoreIcon/>
                </ListItemIcon>
                <ListItemText primary="Products"/>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem
                        className={classes.innerListItem}
                        button
                        onClick={() => history.push('/admin/products')}
                    >
                        <ListItemIcon>
                            <FormatListNumberedIcon/>
                        </ListItemIcon>
                        <ListItemText primary="List of Products"/>
                    </ListItem>
                    <ListItem
                        className={classes.innerListItem}
                        button
                        onClick={() => history.push('/admin/products/add')}
                    >
                        <ListItemIcon>
                            <AddIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Add New Product"/>
                    </ListItem>
                </List>
            </Collapse>
            <ListItem button onClick={() => history.push('/admin/orders')}>
                <ListItemIcon>
                    <ShoppingBasketIcon/>
                </ListItemIcon>
                <ListItemText primary="Orders"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <ExitToAppIcon/>
                </ListItemIcon>
                <ListItemText primary="Logout"/>
            </ListItem>
        </List>
    )
}

export default SideNav