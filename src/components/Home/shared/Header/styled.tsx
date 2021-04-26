import {makeStyles} from "@material-ui/core";
import styled from "styled-components";

export const useStyles = makeStyles(() => ({
    wrapper: {
        width: '100%',
        minHeight: '70px',
        padding: '0 40px',
        backgroundColor: '#1976D2',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    gridContainer: {
        height: '100%',
        minHeight: '70px'
    },
    brand: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 600,
        '& a': {
            textDecoration: 'none',
            color: '#ffffff'
        },
        // '@media()'
    }
}))

export const Nav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`
export const NavItem = styled.li`
  padding: 10px 15px;
  color: #ffffff;
  font-size: 14px;

  a {
    text-decoration: none;
    color: #ffffff;
    cursor: pointer;
  }
`

