import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <NavWrap>
            <div class="navbar">
        <ul>
          <NavLink to="/" exact>  <li>Teams</li> </NavLink>
          <NavLink to="/standing" exact>  <li>Standings</li> </NavLink>
          <NavLink to="/matches" exact>  <li>All Matches</li> </NavLink>
        </ul>

            </div>
        </NavWrap>
    );
};

export default Navbar;

const NavWrap = styled.div`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Times New Roman', Times, serif;
}

body {
    background: #f1f3f6;
}

.navbar {
    display: flex;
    min-width: 800px;
    align-items: center;
    justify-content: center;
    background: #fff;
    padding: 0 20px;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.8);
    border-radius: 20px;
    margin: 30px;
}

.navbar .con-logo {
    width: 100px;
}

.navbar ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
}
.navbar ul li {
    padding: 20px;
    font-weight: 500;
    text-transform: capitalize;
    cursor: pointer;
}
`