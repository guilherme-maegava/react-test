import React, { Component } from "react";
import { SideNav, SideNavItem, Button, Icon, Navbar } from "react-materialize";

import { NavLink } from "react-router-dom";

import './Menu.css';

class Menu extends Component {

    activeSide = true;

    render() {
        return (
            <div className="container-fluid">
                <div className="row menu">
                <div className="col menu s1 black">
                    <SideNav
                    className="left-align"
                    trigger={<Button className="black custom-btn"><Icon center>menu</Icon></Button>}
                    // fixed
                    options={{ closeOnClick: true }}
                    >
                    <SideNavItem subheader className="center-align">Heroes Association</SideNavItem>
                    <SideNavItem divider />
                        <li><NavLink to="/spa-react-heroes-association/"><Icon>home</Icon>Home</NavLink></li>
                        <li><NavLink to="/spa-react-heroes-association/hero/form"><Icon>fiber_new</Icon>Register a New Hero</NavLink></li>
                        <li><NavLink to="/spa-react-heroes-association/hero/list"><Icon>list</Icon>Heroes</NavLink></li>
                    </SideNav>
                </div>
                <div className="col menu s11">
                    <Navbar className="black custom-nav">
                    </Navbar>
                </div>
                </div>
            </div>
        );
    }
}

export default Menu;