import React from "react";

import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

import { useCurrentUser } from "../contexts/CurrentUserContext";

const NavBar = () => {
    const currentUser = useCurrentUser();

    const loggedOutNav = (
        <>
            <h1>{currentUser?.username}</h1>
            <NavLink
                className={`${styles.NavLink} text-center`}
                activeClassName={styles.Active}
                to="/signin">
                Sign in
            </NavLink>
            <NavLink
                to="/signup"
                className={`${styles.NavLink} text-center`}
                activeClassName={styles.Active}>
                Sign up
            </NavLink>
        </>
    );

    const loggedInNav = (
        <>
            <NavLink
                className={`${styles.NavLink} text-center`}
                activeClassName={styles.Active}
                to="/customtasks">
                Custom Tasks
            </NavLink>
            <NavLink
                to="/projectarchive"
                className={`${styles.NavLink} text-center`}
                activeClassName={styles.Active}>
                Project Archive
            </NavLink>
        </>
    );

    return (
        <Navbar className={styles.NavBar} expand="lg" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <h1>Free Flow</h1>
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink
                            exact
                            className={`${styles.NavLink} text-center`}
                            activeClassName={styles.Active}
                            to="/">
                            Home
                        </NavLink>
                        {currentUser ? loggedInNav : loggedOutNav}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
