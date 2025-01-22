import React from "react";

import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import UserImage from "./UserImage";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const {expanded, setExpanded, ref} = useClickOutsideToggle();

    const handleSignOut = async () => {
        try {
          await axios.post("dj-rest-auth/logout/");
          setCurrentUser(null);
        } catch (err) {
          console.log(err);
        }
      };

    const loggedOutNav = (
        <>
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
                to={`/profiles/${currentUser?.profile_id}`}>
                Profile
            </NavLink>
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
            <NavLink
                className={`${styles.NavLink} text-center`}
                to="/"
                onClick={handleSignOut}
            >
                Sign out
            </NavLink>
        </>
    );

    return (
        <Navbar expanded={expanded} className={styles.NavBar} expand="lg" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <h1>Free Flow</h1>
                    </Navbar.Brand>
                </NavLink>
                { currentUser &&
                    <Nav.Item>
                        <UserImage src={currentUser?.profile_image} text={currentUser?.username} height={30} />
                    </Nav.Item>
                }
                
                <Navbar.Toggle
                    ref={ref}
                    onClick={() => setExpanded(!expanded)}
                    aria-controls="basic-navbar-nav"
                />
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
