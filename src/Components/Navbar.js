import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <NavWrap>
            <div >
            <nav className="header-nav container">
                 <NavLink to="/" exact>  <p>Teams</p> </NavLink>
                 <NavLink to="/standing" exact>  <p>Standings</p> </NavLink>
                 <NavLink to="/matches" exact>  <p>All Matches</p> </NavLink>
             </nav>

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
.header-nav container{
}
.header-nav {
    align-items: center;
    justify-content:center;
    display:flex;
    box-shadow: 0px 0px 20px 0.5px #8488c4;
    font-weight: bold;
}
    .header-nav a {
        margin-left : 0.3rem;
        text-decoration: none;
        padding: 1rem;
        color: #8488c4;
        z-index: inherit;
    }
    @media all and (max-width: 600px) {
        .header {
            position: inherit;
        }
      .header, .header-nav {
        -webkit-flex-flow: column wrap;
        flex-flow: column wrap;
            align-content: center;
        padding: 0;
            background-color: #fff;
      }
    }
    
    `