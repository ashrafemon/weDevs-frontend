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
import CategoryIcon from '@material-ui/icons/Category';
import {useDispatch} from "react-redux";
import {logout} from "../../../../../store/actions/auth/action";

const useStyles = makeStyles(theme => ({
    innerListItem: {
        paddingLeft: theme.spacing(4)
    }
}))

const SideNav: React.FC = () => {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const logoutHandler = () => {
        dispatch(logout(() => history.replace('/login')))
    }

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
                    <CategoryIcon/>
                </ListItemIcon>
                <ListItemText primary="Categories"/>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem
                        className={classes.innerListItem}
                        button
                        onClick={() => history.push('/admin/categories')}
                    >
                        <ListItemIcon>
                            <FormatListNumberedIcon/>
                        </ListItemIcon>
                        <ListItemText primary="List of Category"/>
                    </ListItem>
                    <ListItem
                        className={classes.innerListItem}
                        button
                        onClick={() => history.push('/admin/categories/add')}
                    >
                        <ListItemIcon>
                            <AddIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Add New Category"/>
                    </ListItem>
                </List>
            </Collapse>
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
                        <ListItemText primary="List of Product"/>
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
            <ListItem button onClick={logoutHandler}>
                <ListItemIcon>
                    <ExitToAppIcon/>
                </ListItemIcon>
                <ListItemText primary="Logout"/>
            </ListItem>
        </List>
    )
}

export default SideNav
